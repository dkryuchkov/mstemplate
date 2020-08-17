require("../../config");
require('jest-xml-matcher');
const mock = jest.fn();
const { operation } = require('../service');

mock.mockReturnValueOnce(require('../__mocks__/search').output_body);

test('Test Search Json to Xml', done => {
    expect.assertions(1);
    operation(mock()).then(op => {
        expect(op.preview()).toEqualXML(require('../__mocks__/soap').search_input);
        done()}).catch(done.fail);
    });