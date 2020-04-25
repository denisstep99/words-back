import * as mongoose from 'mongoose';
import {Schema} from "mongoose";


export interface IExample {
    originalSentence: string;
    translatedSentence?: string;
}

export interface ISynonymExample {
    word: string;
    translation: string;
    transcription: string;
}

export interface IDictionaryNote extends mongoose.Document {
    word: string;
    translation: string;
    transcription?: string;
    examples?: Array<IExample>;
    synonyms?: Array<ISynonymExample>;
}

const DictionaryNoteSchema: Schema = new Schema<IDictionaryNote>({
    word: {
        type: String,
        unique: true,
        required: [true, 'Word is required'],
        trim: true,
    },
    translation: {
        type: String,
        required: [true, 'Translation is required'],
        trim: true,
    },
    transcription: {
        type: String,
        trim: true,
    },
    examples: {
        type: [{
            originalSentence: {
                type: String,
                trim: true,
                required: [true, 'Original sentence in examples is required'],
            },
            translatedSentence: {
                type: String,
                trim: true,
            }
        }],
        default: undefined
    },
    synonyms: {
        type: [{
            word: {
                type: String,
                required: [true, 'Word in synonyms is required'],
                trim: true
            },
            translation: {
                type: String,
                required: [true, 'Translation in synonyms is required'],
                trim: true,
            },
            transcription: {
                type: String,
                trim: [true, 'Transcription in synonyms is required'],
            },
        }],
        default: undefined
    }
});

export default mongoose.model<IDictionaryNote>('DictionaryNote', DictionaryNoteSchema);
