import * as morgan from 'morgan';
import * as express from 'express';
import * as bodyParser from "body-parser";
import * as compression from 'compression';
import * as helmet from 'helmet';

const isDev: boolean = process.env.NODE_ENV === 'development';
const isProd: boolean = process.env.NODE_ENV === 'production';

export default (app: express.Application): void => {
    if (isProd) {
        app.use(compression());
        app.use(helmet());
    }

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true,
    }));

    if (isDev) {
        app.use(morgan('dev'));
    }
}
