import { describe, it } from 'mocha'
import { ApiError } from './apiError'
import { expect } from 'chai'

describe('ApiError', () => {
    const DEFAULTS = {
        name: 'ApiError',
        status: 500,
        message: 'Something went wrong. Please try again.',
    }
    it('should have default Internal Server Error atributes', () => {
        try {
            throw new ApiError()
        } catch (error) {
            expect(error.name).to.equal(
                DEFAULTS.name,
                'should have the default ApiError name',
            )
            expect(error.status).to.equal(
                DEFAULTS.status,
                'should have internal server error status as default',
            )
            expect(error.message).to.equal(
                DEFAULTS.message,
                'should have generic error message by default',
            )
            expect(!!error.stack, 'should capture the call stack trace').to.be
                .true
        }
    })

    it('should have the attributes passed by the constructor', () => {
        const customStatus = 409
        const customMessage = 'Custom error message'
        try {
            throw new ApiError(customMessage, customStatus)
        } catch (error) {
            expect(error.name).to.equal(
                DEFAULTS.name,
                'should have the default ApiError name',
            )
            expect(error.status).to.equal(
                customStatus,
                'should have status passed on constructor',
            )
            expect(error.message).to.equal(
                customMessage,
                'should have message passed on constructor',
            )
            expect(!!error.stack, 'should capture the call stack trace').to.be
                .true
        }
    })
    it('should handle optional parameters passed on constructor', () => {
        const customStatus = 403
        try {
            throw new ApiError(undefined, customStatus)
        } catch (error) {
            expect(error.name).to.equal(
                DEFAULTS.name,
                'should have the default ApiError name',
            )
            expect(error.status).to.equal(
                customStatus,
                'should status passed on constructor',
            )
            expect(error.message).to.equal(
                DEFAULTS.message,
                'should have generic error message by default',
            )
            expect(!!error.stack, 'should capture the call stack trace').to.be
                .true
        }
    })
})
