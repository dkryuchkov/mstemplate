module.exports = {
   context: {
        callbackWaitsForEmptyEventLoop: false,
        logGroupName: "/aws/lambda/cm-ods-api-base-api",
        logStreamName: "2018/07/25/[$LATEST]fb2a87d53a2f4c42a1d304275c59b792",
        functionName: "cm-ods-api-base-api",
        memoryLimitInMB: "128",
        functionVersion: "$LATEST",
        invokeid: "2a3fd333-8fd2-11e8-a1cf-7dfbc5fffd2b",
        awsRequestId: "2a3fd333-8fd2-11e8-a1cf-7dfbc5fffd2b",
        invokedFunctionArn: "arn:aws:lambda:ap-southeast-2:424247693531:function:cm-ods-api-base-api",
    },
    customers_InvalidInputJsonException: {
        path: "/customers",
        httpMethod: "POST",
        headers: {
            application: "NAB",
            user: "user1"
        },
        body:  "{\"name\": \"john\", \"type\": \"RED\"}"
    },
    customers_Ok: {
        path: "/customers",
        httpMethod: "POST",
        headers: require('../schema/__mocks__/headers').headers,
        body:  JSON.stringify(require('../schema/__mocks__/create').input_body)
    },
    customers_search_Ok: {
        path: "/customers/search",
        httpMethod: "POST",
        headers: require('../schema/__mocks__/headers').headers,
        body:  JSON.stringify(require('../schema/__mocks__/search').input_body)
    }
}
