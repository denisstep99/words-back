import * as express from 'express';
import {errorPresenter} from '../../utils/errorPresenter';
import Dictionary from "../dictionary/dictionary.model";
import DictionaryNote from "./dictionaryNote.model";
import * as HTTPStatus from 'http-status';

export async function createDictionaryNote(req: express.Request, res: express.Response): Promise<express.Response> {
    try {
        const dictionary = await Dictionary.findById(req.body.dictionaryId);
        if (dictionary) {
            const dictionaryNote = await DictionaryNote.create(req.body);
            const dictionaryId = dictionaryNote._id;

            await dictionary._notes.addNote(dictionaryId);
            return res.status(HTTPStatus.OK).json(dictionaryNote);
        } else {
            return res.status(HTTPStatus.BAD_REQUEST).json('Dictionary is not exist');
        }
    } catch (err) {
        return res.status(HTTPStatus.BAD_REQUEST).json(errorPresenter(err));
    }
}

export async function getNotesList(req: express.Request, res: express.Response): Promise<express.Response> {
    try {
        const dictionary = (await Dictionary
                .findById(req.body.dictionaryId)
                .populate('notesList'));

        const dictionaryNotes = dictionary.notesList;

        return res.status(HTTPStatus.OK).json(dictionaryNotes);
    } catch (err) {
        return res.status(HTTPStatus.BAD_REQUEST).json(errorPresenter(err));
    }
}
