import mongoose from "mongoose";

const { Schema } = mongoose;

const aboutsSchema = new Schema({
  title: { type: String, required: true, trim: true },
  contact_1: { type: String, required: true, trim: true },
  description_1: { type: String, required: true, trim: true },
});

const AboutsModel = mongoose.model("abouts", aboutsSchema);

export default AboutsModel;
