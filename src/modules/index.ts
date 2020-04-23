import dictionaryRoutes from './dictionary/dictionary.routes';
import * as express from 'express';

export default (app: express.Application) => {
    app.use('/api/v1/dictionary', dictionaryRoutes);
}
