import { NextFunction, Request, Response } from 'express'
import { before, beforeEach, describe, it } from 'mocha'
import { mockNext, mockResponse } from '../shared/__mocks__/express.controller'
import { spy, stub } from 'sinon'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import { controller } from './msg.controller'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)
chai.use(chaiAsPromised)
const { expect } = chai

describe('Msg Controller', () => {
    let res: Response
    let next: NextFunction

    beforeEach(() => {
        res = mockResponse()
        next = mockNext()
    })

    describe('createMessage', () => {
        let req: Request
        let controllerSpy

        before(() => {
            controllerSpy = spy(controller, 'createMessage')
        })
        beforeEach(() => {
            req = { body: { msg: 'test msg' } } as unknown as Request
        })

        it('should return the body with a CREATED status', async () => {
            await controllerSpy(req, res, next)
            expect(res.status).to.have.been.calledWith(201)
            expect(res.json).to.have.been.calledWith(req.body)
        })

        it('should throw to next on error', async () => {
            const mockError = new Error('Mock error')
            req = {
                body: stub().rejects(mockError),
            } as unknown as Request

            expect(controllerSpy(req, res, next)).to.eventually.throw(
                'Mock error',
            )
        })
    })
})
