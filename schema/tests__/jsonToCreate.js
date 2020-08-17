require("../../config");
require('jest-xml-matcher');
const mock = jest.fn();
const { operation } = require('../service');

mock.mockReturnValueOnce(require('../__mocks__/create').output_body);

test('Test Create Json to Xml', done => {
    expect.assertions(1);
    operation(mock()).then(op => {
        expect(op.preview()).toEqualXML(require('../__mocks__/soap').create_input);
        done()}).catch(done.fail);
    });