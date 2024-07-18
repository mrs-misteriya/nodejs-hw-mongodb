import { Schema, model } from "mongoose";
import { typeList } from "../../constants/contacts-constants.js";
import { mongooseSaveError, setUpdateSettings } from "./hooks.js";


const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 30
    },
    phoneNumber: {
        type: String,
        required: true,
        min: 3,
        max: 30
    },
    email: {
        type: String,
        unique: true,
        min: 3,
        max: 30
    },
    isFavourite: {
        type: Boolean,
        default: false,
    },
    contactType: {
        type: String,
        enum: typeList,
        default: 'personal',
        min: 3,
        max: 30
    },
},
    {
        versionKey: false,
        timestamps: true
    },
);

contactSchema.post('save', mongooseSaveError);

contactSchema.pre('findOneAndUpdate', setUpdateSettings);

contactSchema.post('findOneAndUpdate', mongooseSaveError);

const Contact = model('contact', contactSchema);

export default Contact;
