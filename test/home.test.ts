const sleep = require('./utils/sleep');

const request = require('supertest');
const app = require('../app').application;

describe('GET / ', () => {
    test('It should respond string', async (done) => {
        await sleep(2000);

        const response = await request(app.server).get('')
        .expect('Content-Type', 'text/plain; charset=utf-8')
        .expect(200);

        expect(response.text).toEqual('hi, server running good!');
        done();
    }, 30000);
});
