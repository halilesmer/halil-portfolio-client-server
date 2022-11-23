import mongoose from "mongoose";

const { Schema } = mongoose;

const projectsSchema = new Schema({
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

const ProjectsModel = mongoose.model("projects", projectsSchema);

export default ProjectsModel;
