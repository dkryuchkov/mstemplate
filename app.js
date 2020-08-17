require("dotenv").config()
const port = process.env.PORT
const AWSXRay =
  process.env.NODE_ENV === "prod" && process.env.useMock === "false"
    ? require("aws-xray-sdk")
    : null
const LogWrapper = require("./logger")
const logger = new LogWrapper(process.env.LOG_LEVEL)
const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware")
const openApiMiddleware = require("swagger-express-middleware")
const {
  OpenApiValidator,
  ValidationError,
} = require("express-openapi-validate")
const _ = require("lodash")
const controllers = require("./controllers")
const payloadUtils = require("./payload-utils")

const swaggerPath = path.join(
  __dirname,
  process.env.SWAGGER_PATH || "../../Swagger",
  "swagger.yml"
)
const app = express()

const errors = {
  400: "DT_05_INVALID_REQUEST",
  404: "DT_01_NOT_FOUND",
  405: "DT_02_METHOD_NOT_ALLOWED",
  406: "DT_03_NOT_ACCEPTABLE",
  500: "DT_04_GENERAL_ERROR",
}

function sendDefaultResponse(res, controllerResponse) {
  res.status(controllerResponse.status)
  if (controllerResponse.status != 204) {
    res.set("Content-Type", "application/json")
    res.send(JSON.stringify(controllerResponse.payload))
  }
}

async function requestHandler(req, res, controllers) {
  logger.debug(
    `Handling request for path ${req.path} -> ${req.swagger.pathName}`
  )
  if (controllers[req.swagger.operation.operationId]) {
    let payload = payloadUtils.defaultPayload(req, 200)

    if (process.env.NODE_ENV === "prod" && process.env.useMock === "false")
      app.use(AWSXRay.express.openSegment(process.env.EXPRESS_SEG))
    let controllerResponse = await controllers[
      req.swagger.operation.operationId
    ](req, payload)
    if (process.env.NODE_ENV === "prod" && process.env.useMock === "false")
      app.use(AWSXRay.express.closeSegment())

    let response =
      req.swagger.operation.responses[controllerResponse.status.toString()]
    if (response) {
      let contentType = _.head(Object.keys(response.content))
      res.set("Content-Type", contentType)
      res
        .status(controllerResponse.status)
        .send(
          controllerResponse.payload.toJSON
            ? controllerResponse.payload.toJSON()
            : controllerResponse.payload
        )
    } else {
      console.info(
        "No matching response in the swagger specification, sending a default"
      )
      sendDefaultResponse(res, controllerResponse)
    }
  } else {
    logger.error(
      `No handler defined for operation ${req.swagger.operation.operationId}`
    )
    res.status(404).send({
      errorId: "CMODS_01_NOT_FOUND",
      message: "Path not valid",
    })
  }
}

const readyPromise = new Promise((resolve) => {
  openApiMiddleware(swaggerPath, app, (err, middleware, swaggerApi) => {
    if (err == null) {
      app.use(bodyParser.json())
      app.use(
        middleware.metadata(),
        middleware.files(),
        middleware.validateRequest(),
        middleware.CORS()
      )
      app.use(awsServerlessExpressMiddleware.eventContext())

      const validator = new OpenApiValidator(swaggerApi)
      app.all(
        /.+/,
        (req, res, next) =>
          validator.validate(req.method.toLowerCase(), req.path)(
            req,
            res,
            next
          ),
        (req, res) => {
          requestHandler(req, res, controllers)
        }
      )
      app.use((err, req, res, next) => {
        logger.error("Request failed with error: " + err)
        if (err instanceof ValidationError) {
          res.status(400).send({
            errorId: "CMODS_05_INVALID_REQUEST",
            message: err.message,
          })
        } else {
          var status = _.get(err, "status", 500)
          res.status(status).send({
            errorId: _.get(errors, status, "CMODS_04_GENERAL_ERROR"),
            message: err.message,
          })
        }
      })
      app.use((req, res) => {
        res.status(404).send({
          errorId: "CMODS_01_NOT_FOUND",
          message: "Path not valid",
        })
      })
    } else {
      logger.error("Failed to load openApi spec", err)
      app.use((req, res) => {
        res.status(500).send({
          errorId: "CMODS_04_GENERAL_ERROR",
          message: "General server error has occurred",
        })
      })
    }

    logger.debug("Express Server Ready")
    resolve(true)
  })
})

await readyPromise
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`)
})
