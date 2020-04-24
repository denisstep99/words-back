import {Router} from 'express';
import * as validate from 'express-validation';
import dictionaryNoteValidation from './dictionaryNote.validations';
import * as dictionaryNoteController from './dictionaryNote.controller';

const routes: Router = Router();
routes.post('/create', validate(dictionaryNoteValidation.create), dictionaryNoteController.createDictionaryNote);

export default routes;
