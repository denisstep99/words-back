import dictionaryRoutes from './dictionary/dictionary.routes';
import dictionaryNoteRoutes from './dictionaryNote/dictionaryNote.routes';
import * as express from 'express';

export default (app: express.Application): void => {
    app.use('/api/v1/dictionary', dictionaryRoutes);
    app.use('/api/v1/dictionaryNote', dictionaryNoteRoutes);
}
