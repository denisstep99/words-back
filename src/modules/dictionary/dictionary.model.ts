import * as mongoose from 'mongoose';
import {Schema} from "mongoose";

export enum Type {COLLOCATIONS = 'collocations', SYNONYMS = 'synonyms', WORDS = 'words'}
export const TypeArray = ['collocations', 'synonyms', 'words'];

export interface IExample {
    originalSentence: string;
    translatedSentence?: string;
}

export interface ISynonymExample {
    word: string;
    translation: string;
    transcription: string;
}

export interface IDictionaryNote {
    word: string;
    translation: string;
    transcription?: string;
    examples?: Array<IExample>;
    synonyms?: Array<ISynonymExample>;
}

export interface IDictionary extends mongoose.Document {
    title: string;
    type: Type;
    wordList: Array<IDictionaryNote>;
}

const DictionarySchema: Schema = new Schema<IDictionary>({
    title: {
        type: String,
        unique: true,
        required: [true, 'Title is required'],
        trim: true,
        maxlength: 50
    },
    type: {
        type: String,
        required: true,
        trim: true,
        enum: TypeArray,
    },
    wordList: [{
        type: mongoose.Types.ObjectId,
        ref: 'DictionaryNote',
    }]
});

DictionarySchema.methods = {
  toJSON() {
      return {
          title: this.title,
          type: this.type,
          wordList: this.wordList,
      }
  }
};

export default mongoose.model<IDictionary>('Dictionary', DictionarySchema);
