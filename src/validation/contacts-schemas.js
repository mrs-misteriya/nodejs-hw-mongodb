import Joi from "joi";
import { typeList } from "../constants/contacts-constants.js";

export const contactsAddSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    phoneNumber: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().valid(...typeList).required(),
});


export const contactsUpdateSchema = Joi.object({
    name: Joi.string().min(3).max(30),
    phoneNumber: Joi.string().min(3).max(30),
    email: Joi.string().email(),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().valid(...typeList),
});
