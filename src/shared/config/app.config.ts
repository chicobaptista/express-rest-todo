import * as env from 'env-var'

const PORT: number = env
    .get('APP_PORT')
    .default('3000')
    .required()
    .asIntPositive()

const appConfig = {
    PORT,
}

export default appConfig
