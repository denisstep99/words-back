import * as Joi from 'joi';
import {Type} from './dictionary.model';

export default {
    create: {
        body: {
            title: Joi.string().trim().required().max(50),
            type: Joi.string().trim().required().valid(Type),
        }
    }
}
