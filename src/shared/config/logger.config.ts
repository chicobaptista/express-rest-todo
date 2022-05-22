import * as env from 'env-var'

const ERRORS: boolean = env
    .get('LOG_ERRORS')
    .default('true')
    .required()
    .asBool()

const loggerConfig = {
    ERRORS,
}

export default loggerConfig
