import { beforeEach, describe, it } from 'mocha'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

import { createTodoReqSchema } from './todo.schema'
import { fakeTodoRequest } from './__mocks__/todo.generator'

chai.use(chaiAsPromised)
const { expect } = chai
const validateOptions = {
    stripUnknown: true,
    abortEarly: false,
}

describe('CreateTodoRequest Schema', () => {
    describe('On a valid request', () => {
        const mockTodo = {
            ...fakeTodoRequest(),
            msg1: 'extraData',
        }
        it('should validate schema and strip unkown properties of an object', async () => {
            const validatedData = await createTodoReqSchema.validate(
                mockTodo,
                validateOptions,
            )

            expect(validatedData.body).to.have.property(
                'title',
                mockTodo.body.title,
                'should have title property with value intact',
            )
            expect(validatedData.body).to.have.property(
                'description',
                mockTodo.body.description,
                'should have description property with value intact',
            )
            expect(validatedData.body).to.have.property(
                'complete',
                mockTodo.body.complete,
                'should have complete property with value intact',
            )
            expect(validatedData).to.not.have.property(
                'msg1',
                mockTodo.msg1,
                'should strip unknown property',
            )
        })
    })

    describe('On an invalid request', () => {
        let mockRequest

        beforeEach(() => {
            mockRequest = fakeTodoRequest()
        })
        it('should throw if no title field is present', async () => {
            delete mockRequest.body.title

            const res = createTodoReqSchema.validate(
                mockRequest,
                validateOptions,
            )
            await expect(res).to.eventually.be.rejectedWith(
                'title is a required field',
            )
        })
        it('should throw if complete field is of wrong type', async () => {
            mockRequest.body.complete = '123'

            const res = createTodoReqSchema.validate(
                mockRequest,
                validateOptions,
            )
            await expect(res).to.eventually.be.rejectedWith(
                'complete must be a `boolean` type',
            )
        })
    })
})
