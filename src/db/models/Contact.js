import { Schema, model } from "mongoose";
import { typeList } from "../../constants/contacts-constants.js";


const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    isFavourite: {
        type: Boolean,
        default: false,
    },
    contactType: {
        type: String,
        enum: typeList,
        default: 'personal',
    },
},
    {
        versionKey: false,
        timestamps: true
    },
);


const Contact = model('contact', contactSchema);

export default Contact;
