import * as Joi from 'joi';


export default {
    create: {
        body: {
            word: Joi.string().trim().required(),
            translation: Joi.string().trim().required(),
            transcription: Joi.string().trim(),
            synonyms: Joi.array().items(
                Joi.object({
                    word: Joi.string().trim().required(),
                    translation: Joi.string().trim().required(),
                    transcription: Joi.string().trim(),
                })
            ),
            examples: Joi.array().items(
                Joi.object({
                    originalSentence: Joi.string().trim().required(),
                    translatedSentence: Joi.string().trim(),
                })
            )
        }
    }
}
