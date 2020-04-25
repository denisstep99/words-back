import {Router} from 'express';
import * as validate from 'express-validation';
import dictionaryValidation from './dictionary.validations';
import * as dictionaryController from './dictionary.controller';

const routes: Router = Router();
routes.post('/create', validate(dictionaryValidation.create), dictionaryController.createDictionary);
routes.delete('/:id', validate(dictionaryValidation.remove), dictionaryController.removeDictionary);
routes.get('/get-list', dictionaryController.getDictionariesList);

export default routes;

