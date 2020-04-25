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

export async function getDictionariesList(req: express.Request, res: express.Response): Promise<express.Response> {
    try {
        const dictionaries = (await Dictionary.find({}));
        return res.status(HTTPStatus.OK).json(dictionaries);
    } catch (err) {
        return res.status(HTTPStatus.BAD_REQUEST).json(errorPresenter(err));
    }
}

export async function removeDictionary(req: express.Request, res: express.Response): Promise<express.Response> {
    try {
        const dictionary = await Dictionary.findById(req.params.id);
        await dictionary.remove();

        return res.sendStatus(HTTPStatus.OK);
    } catch (err) {
        return res.status(HTTPStatus.BAD_REQUEST).json(errorPresenter(err));
    }
}
