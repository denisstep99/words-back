export type envConfigMode = 'development' | 'test' | 'production';

export interface IConfigMode {
    MONGO_URL: string,
    JWT_SECRET: string
}

const devConfig = {MONGO_URL: 'mongodb://localhost/app-dev', JWT_SECRET: 'SECRET CODE'};
const testConfig = {MONGO_URL: 'mongodb://localhost/app-test', JWT_SECRET: 'SECRET CODE'};
const prodConfig = {MONGO_URL: 'mongodb://localhost/app-prod', JWT_SECRET: 'SECRET CODE'};

const defaultConfig = {
    PORT: Number(process.env.PORT) || 3010,
};

function envConfig(env: envConfigMode): IConfigMode {
    switch (env) {
        case "development":
            return devConfig;
        case "test":
            return testConfig;
        default:
            return prodConfig;
    }
}

export default {
    ...defaultConfig,
    ...envConfig(<envConfigMode>process.env.NODE_ENV)
}
