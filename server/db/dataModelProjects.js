import mongoose from "mongoose";


const projectsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    
    link: {
        type: String,
        required: true,
    },
    git: {
        type: String,
       
    },
    img: {
        type: String,
        required: true,
    },
 
});

/* 'projects is the name of our model' */
const Projects = mongoose.model('projects', projectsSchema)

export default Projects;