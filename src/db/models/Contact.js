import { Schema, model } from "mongoose";

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
        required: true,
        enum: ['work', 'home', 'personal'],
        default: 'personal',
    },
},
    {timestamps: true },
);


const Contact = model('contact', contactSchema);

export default Contact;
