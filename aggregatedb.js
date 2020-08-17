// Load the AWS SDK for Node.js

const dynamoDb = new require("aws-sdk").DynamoDB.DocumentClient({
  api_version: "2012-08-10",
  region: process.env.AWS_DEPLOY_REGION,
})

module.exports = {
  putItem: async (message, context) => {
    const params = {
      TableName: process.env.MESSAGES_TABLE,
      Item: Object.assign(
        {
          transactionId: message.transactionId,
          status: message.status,
          clientId: message.clientId,
          timestamp: new Date().toISOString(),
        },
        message
      ),
    }

    try {
      const data = await dynamoDb.put(params).promise()
      return {
        statusCode: context.swagger.operation.successCode,
        body: JSON.stringify({ params, data }),
      }
    } catch (error) {
      return {
        statusCode: context.swagger.operation.failureCode,
        error: `Could not post: ${error.stack}`,
      }
    }
  },
  query: async (message, context) => {
    const params = {
      TableName: process.env.MESSAGES_TABLE,
      ExpressionAttributeValues: {
        ":v1": {
          S: message.transactionId || message.contactID,
        },
      },
      KeyConditionExpression: message.transactionId
        ? "transactionId = :v1"
        : "contactId = :v1",
    }

    try {
      const data = await dynamoDb.put(params).promise()
      return {
        statusCode: context.swagger.operation.successCode,
        body: JSON.stringify({ params, data }),
      }
    } catch (error) {
      return {
        statusCode: context.swagger.operation.failureCode,
        error: `Could not post: ${error.stack}`,
      }
    }
  },
}
