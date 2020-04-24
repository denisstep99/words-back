import * as express from 'express';
import {errorPresenter} from '../../utils/errorPresenter';
import Dictionary from "./dictionary.model";
import * as HTTPStatus from 'http-status';

export async function createDictionary(req: express.Request, res: express.Response): Promise<express.Response>{
    try {
        const dictionary = await Dictionary.create(req.body);
        return res.status(HTTPStatus.OK).json(dictionary);
    } catch (err) {
        return res.status(HTTPStatus.BAD_REQUEST).json(errorPresenter(err));
    }
}
