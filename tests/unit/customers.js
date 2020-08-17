const {
  graphqlHandler
} = require("../../graphqlhandler");

const chai = require("chai");
const expect = chai.expect;
process.env['useMock'] = true;
const context = require('../../__mocks__/request').context;;

describe("CustomerSync 201", () => {
  let req;
  before(() => {
    req = require('../../__mocks__/request').customers_Ok;
    req.body = JSON.parse(req.body);
  });

  it("verifies successful response", async () => {
    graphqlHandler(req, context).then(_ => {
      expect(_.status).to.equal(201);
      expect(_.payload.id).to.equal("400082533997");
    });
  })
});

describe("CustomerSync 400", () => {
  let req;
  before(() => {
    req = require('../../__mocks__/request').customers_InvalidInputJsonException;
    req.body = JSON.parse(req.body);
  });

  it("verifies response failure", async () => {
    graphqlHandler(req, context).then(_ => expect(_.status).to.equal(400));
  })
});
