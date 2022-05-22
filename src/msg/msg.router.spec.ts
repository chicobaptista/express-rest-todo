import { afterEach, before, beforeEach, describe, it } from 'mocha'
import chai, { expect } from 'chai'
import express, { json } from 'express'
import { MessageController } from './msg.controller.interface'
import { controller } from './__mocks__/msg.controller'
import chaiHttp = require('chai-http')
import { mockSchema } from '../shared/__mocks__/yup.schema'
import msgRouter from './msg.router'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import chaiAsPromised = require('chai-as-promised')

chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.use(chaiHttp)

describe('Message route', () => {
    const sandbox = sinon.createSandbox()
    let spy
    let app

    before(() => {
        spy = sandbox.spy<MessageController>(controller)
    })
    beforeEach(() => {
        app = express()
        app.use(json())
        app.use(msgRouter(spy, mockSchema))
    })

    afterEach(() => {
        sandbox.restore()
    })
    it('should call controller.createMessage on POST call', async function () {
        await chai.request(app).post('/').send()
        expect(spy.createMessage).to.have.been.called
    })
})
