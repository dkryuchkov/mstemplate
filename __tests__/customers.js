const mock = jest.fn();

mock.mockReturnValueOnce(require('../__mocks__/request').customers_InvalidInputJsonException);
mock.mockReturnValueOnce(require('../__mocks__/request').customers_Ok);
process.env['useMock'] = true;

test('Test InvalidInputJsonException', async done => {
    expect.assertions(1);
    require("../lambda").handler(mock()).then(_ => expect(_.statusCode).toBe(400)).then(done).catch(done.fail);
});

test('Test CustomerSync Ok', async done => {
    expect.assertions(1);
    require("../lambda").handler(mock()).then(_ => expect(_.statusCode).toBe(201)).then(done).catch(done.fail);
});