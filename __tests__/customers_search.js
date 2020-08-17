const mock = jest.fn();

mock.mockReturnValueOnce(require('../__mocks__/request').customers_search_Ok);
process.env['useMock'] = true;

test('Test CustomerSearchAndDedupe Ok', async done => {
    expect.assertions(1);
    require("../lambda").handler(mock()).then(_ => expect(_.statusCode).toBe(200)).then(done).catch(done.fail);
});