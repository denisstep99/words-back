import * as Joi from 'joi';
import {TypeArray} from './dictionary.model';

export default {
    create: {
        body: {
            title: Joi.string().trim().required().max(50),
            type: Joi.string().trim().required().valid(TypeArray),
        }
    },
    remove: {
        body: {
            dictionaryId: Joi.string().trim().required(),
        }
    },
    getProjectList: {
        body: {
            dictionaryId: Joi.string().trim().required(),
        }
    }
}
