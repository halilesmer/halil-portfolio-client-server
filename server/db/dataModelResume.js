import mongoose from "mongoose";


const resumeSchema = mongoose.Schema({
     cvPdf: {
        type: String,
    },
 
});

/* 'resume is the name of our model' */
const Resume = mongoose.model('resume', resumeSchema)

export default Resume;