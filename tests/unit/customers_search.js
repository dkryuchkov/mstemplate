const {
    graphqlHandler
  } = require("../../graphqlhandler");
  
const chai = require("chai");
const expect = chai.expect;
process.env['useMock'] = true;
const context = require('../../__mocks__/request').context;
let req

describe("CustomerSearchAndDedupe", () => {
  before(() => {
    req = require('../../__mocks__/request').customers_search_Ok;
    req.body = JSON.parse(req.body);
  });

  it("verifies successful response", async () => {  
     graphqlHandler(req,context).then(_ => expect(_.status).to.equal(200));
  })
});