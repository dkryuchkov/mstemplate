const LogWrapper = require("./logger")
const logger = new LogWrapper(process.env.LOG_LEVEL)
const { requestHandler } = require("./requesthandler")

exports.customerSearch = (req, data) => {
  logger.debug("customerSearch called")

  return graphqlHandler(req)
}

exports.createCustomer = (req, data) => {
  logger.debug("createCustomer called")

  return graphqlHandler(req)
}
