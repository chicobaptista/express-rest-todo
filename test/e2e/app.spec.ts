import chai, { expect } from 'chai'
import { describe, it } from 'mocha'
import app from '../../src/app'
import chaiHttp = require('chai-http')
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiHttp)
chai.use(chaiAsPromised)

describe('API', () => {
    describe('Message route', () => {
        const ROUTE = '/msg'
        describe('POST method', () => {
            describe('on a valid payload', () => {
                const testBody = { msg: 'testMsg' }
                it('should return the msg param', async () => {
                    const res = await chai
                        .request(app)
                        .post(ROUTE)
                        .send(testBody)
                    expect(res.status).to.equal(201, 'status should be CREATED')
                    expect(res.body.msg).to.equal(testBody.msg)
                })
            })
            describe('on an invalid payload', () => {
                const testBody = {}
                it('should return a bad request status and descriptive message', async () => {
                    const res = await chai
                        .request(app)
                        .post(ROUTE)
                        .send(testBody)
                    expect(res, 'StatusCode should be 400').to.have.status(400)
                    const { body } = res
                    expect(
                        body.type,
                        'Error type should be PayloadValidationError',
                    ).to.equal('PayloadValidationError')
                    expect(
                        body.message,
                        'Error message should say msg is a required field',
                    ).to.include('body.msg is a required field')
                })
            })
        })
    })
})
