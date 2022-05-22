import { NextFunction, Request, Response } from 'express'
import { afterEach, beforeEach, describe, it } from 'mocha'
import chai, { expect } from 'chai'
import {
    mockNext,
    mockRequest,
    mockResponse,
} from '../__mocks__/express.controller'
import chaiAsPromised from 'chai-as-promised'
import { errorLoggerMiddleware } from './errorLogger.middleware'
import { loggerConfig } from '../config'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)
chai.use(chaiAsPromised)
describe('ErrorLogger middleware', () => {
    let res: Response
    let next: NextFunction
    let req: Request
    const error = new Error('Custom messaage')

    beforeEach(() => {
        res = mockResponse()
        next = mockNext()
        req = mockRequest()
        sinon.stub(console, 'error')
    })
    afterEach(() => {
        sinon.restore()
    })
    describe('on LOG_ERRORS = true', () => {
        beforeEach(() => {
            // eslint-disable-next-line no-undef
            loggerConfig.ERRORS = true
        })
        it('should log the error', () => {
            errorLoggerMiddleware(error, req, res, next)
            expect(console.error).to.have.been.calledWith(error)
        })
    })
    describe('on LOG_ERRORS = false', () => {
        beforeEach(() => {
            // eslint-disable-next-line no-undef
            loggerConfig.ERRORS = false
        })
        it('should NOT log the error', () => {
            errorLoggerMiddleware(error, req, res, next)
            expect(console.error).to.not.have.been.called
        })
    })
})
