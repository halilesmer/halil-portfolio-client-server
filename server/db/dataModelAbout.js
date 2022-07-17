import mongoose from "mongoose";


const aboutSchema = mongoose.Schema({
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
 
});

/* 'about is the name of our model' */
const About = mongoose.model('about', aboutSchema)

export default About;