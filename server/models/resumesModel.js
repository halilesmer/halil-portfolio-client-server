import mongoose from "mongoose";

const { Schema } = mongoose;

const resumesSchema = new Schema({
  url: {
    type: String,
  },
});

const ResumesModel = mongoose.model("resumes", resumesSchema);

export default ResumesModel;
