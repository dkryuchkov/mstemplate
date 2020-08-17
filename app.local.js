const LogWrapper = require("./logger")
const logger = new LogWrapper(process.env.LOG_LEVEL)
var AWS = require("aws-sdk")
AWS.Config.logger = logger
var proxy = require("proxy-agent")
AWS.config.update({ httpOptions: { agent: proxy(process.env.HTTPS_PROXY) } })

const app = require("./app")
const port = 3000
console.log(`kicking express on http://localhost:${port}`)
app.server.listen(port)
console.log(`listening on http://localhost:${port}`)
