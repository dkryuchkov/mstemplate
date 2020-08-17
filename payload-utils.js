const _ = require("lodash")

function generateExample(schema) {
  switch (schema.type) {
    case "number":
      return generateNumber(schema)
    case "integer":
      return generateInteger(schema)
    case "boolean":
      return generateBoolean(schema)
    case "array":
      return generateArray(schema)
    case "object":
    case undefined:
      return generateObject(schema)
    case "file":
      return generateFile(schema)
    case "string":
      switch (schema.format) {
        case "byte":
          return generateInteger(schema)
        case "date":
        case "date-time":
          return generateDate(schema)
        default:
          return generateString(schema)
      }
  }
}

function generateNumber(schema) {
  return schema.default ? schema.default : 0
}

function generateInteger(schema) {
  return schema.default ? schema.default : 0
}

function generateBoolean(schema) {
  return schema.default ? schema.default : false
}

function generateArray(schema) {
  return schema.items ? [generateExample(schema.items)] : []
}

function generateObject(schema) {
  if (schema.properties) {
    return _.mapValues(schema.properties, value => generateExample(value))
  } else {
    return {}
  }
}

function generateFile(schema) {
  return schema.default ? schema.default : ""
}

function generateDate(schema) {
  return schema.default ? schema.default : ""
}

function generateString(schema) {
  return schema.default ? schema.default : ""
}

exports.defaultPayload = (req, status) => {
  let defaultResponse = req.swagger.operation.responses[status.toString()]
  if (defaultResponse) {
    let contentType = _.head(Object.keys(defaultResponse.content))
    let schema = defaultResponse.content[contentType].schema
    let result = schema ? generateExample(schema) : {}
    delete result["_links"]
    return result
  } else {
    return {}
  }
}

if (process.env.NODE_ENV == "test") {
  exports.generateExample = generateExample
  exports.generateNumber = generateNumber
  exports.generateInteger = generateInteger
  exports.generateBoolean = generateBoolean
  exports.generateArray = generateArray
  exports.generateObject = generateObject
  exports.generateFile = generateFile
  exports.generateDate = generateDate
  exports.generateString = generateString
}
