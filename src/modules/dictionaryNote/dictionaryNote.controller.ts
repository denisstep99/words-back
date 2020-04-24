import * as express from 'express';
import {errorPresenter} from '../../utils/errorPresenter';
import DictionaryNote from "./dictionaryNote.model";
import * as HTTPStatus from 'http-status';

export async function createDictionaryNote(req: express.Request, res: express.Response): Promise<express.Response> {
    try {
        const dictionaryNote = await DictionaryNote.create(req.body);
        return res.status(HTTPStatus.OK).json(dictionaryNote);
    } catch (err) {
        return res.status(HTTPStatus.BAD_REQUEST).json(errorPresenter(err));
    }
}
