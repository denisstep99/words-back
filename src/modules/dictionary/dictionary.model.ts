import * as mongoose from 'mongoose';
import {Schema} from "mongoose";
import {IDictionaryNote} from "../dictionaryNote/dictionaryNote.model";

export enum Type {COLLOCATIONS = 'collocations', SYNONYMS = 'synonyms', WORDS = 'words'}
export const TypeArray = ['collocations', 'synonyms', 'words'];

export interface IDictionary extends mongoose.Document {
    title: string;
    type: Type;
    notesList: Array<IDictionaryNote>;

    _notes: {
        addNote(noteId: mongoose.Types.ObjectId): void;
    };
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
    notesList: [{
        type: mongoose.Types.ObjectId,
        ref: 'DictionaryNote',
    }]
});

DictionarySchema.methods = {
  toJSON() {
      return {
          id: this._id,
          title: this.title,
          type: this.type,
          notesList: this.notesList,
      }
  },
    _notes: {
      async addNote(noteId: mongoose.Types.ObjectId) {
          this.notesList.addToSet(noteId);
          this.save();
      }
    }
};

export default mongoose.model<IDictionary>('Dictionary', DictionarySchema);
