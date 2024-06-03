import Joi from "joi"

export const newGameSchema = Joi.object({
    homeTeamName: Joi.string().min(3).required(),
    awayTeamName: Joi.string().min(3).required()
})