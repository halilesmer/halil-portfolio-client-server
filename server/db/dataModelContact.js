import mongoose from "mongoose";


const contactSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description_1: {
        type: String,
        required: true
    },
    contact_1: {
        type: String,
        required: true
    },
    cvpdf: {
        type: String,
    },
 
});

/* 'contact is the name of our model' */
const Contact = mongoose.model('contact', contactSchema)

export default Contact;