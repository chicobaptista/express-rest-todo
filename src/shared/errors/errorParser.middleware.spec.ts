import { NextFunction, Request, Response } from 'express'
import { beforeEach, describe, it } from 'mocha'
import chai, { expect } from 'chai'
import {
    mockNext,
    mockRequest,
    mockResponse,
} from '../__mocks__/express.controller'
import { ApiError } from './api-errors/apiError'
import { PayloadValidationError } from './api-errors/payloadValidation.error'
import chaiAsPromised from 'chai-as-promised'
import { errorParserMiddleware } from './errorParser.middleware'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)
chai.use(chaiAsPromised)
describe('ErrorParser Middleware', () => {
    let res: Response
    let next: NextFunction
    let req: Request

    beforeEach(() => {
        res = mockResponse()
        next = mockNext()
        req = mockRequest()
    })
    describe('On ApiError', () => {
        const error = new ApiError()
        it('should return the response with default error properties', () => {
            errorParserMiddleware(error, req, res, next)
            expect(
                res.status,
                'should use InternalServerError status',
            ).to.have.been.calledWith(500)
            expect(
                res.json,
                'should have default error message',
            ).to.have.been.calledWith({
                type: 'ApiError',
                message: 'Something went wrong. Please try again.',
            })
        })
    })
    describe('On base error', () => {
        const error = new Error('Custom error')
        it('should return the response with default ApiError properties', () => {
            errorParserMiddleware(error, req, res, next)
            expect(
                res.status,
                'should use InternalServerError status',
            ).to.have.been.calledWith(500)
            expect(
                res.json,
                'should have captured error message',
            ).to.have.been.calledWith({
                type: 'ApiError',
                message: 'Custom error',
            })
        })
    })
    describe('On extended ApiError', () => {
        const error = new PayloadValidationError('Custom validation message')
        it('should return the response with default error properties', () => {
            errorParserMiddleware(error, req, res, next)
            expect(
                res.status,
                'should use PayloadValidationError status',
            ).to.have.been.calledWith(400)
            expect(
                res.json,
                'should have captured error message',
            ).to.have.been.calledWith({
                type: 'PayloadValidationError',
                message: 'Custom validation message',
            })
        })
    })
})
