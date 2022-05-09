import 'dotenv/config';

//const express = require("express");
import express from "express";
const router = express.Router();
//const mongoose = require("mongoose");
import mongoose from "mongoose";

import { data } from "../data/data.js";

//Testing
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (!err) {
      console.log("Database connected...");
    } else {
      console.log(err);
    }
  }
);

const aboutSchema = new mongoose.Schema({
  aboutHeading: String,
  aboutText: String,
});

const About = mongoose.model("About", aboutSchema);

//insert data into db
data.forEach((item) => {
  const newText = new About({
    aboutHeading: item.aboutHeading,
    aboutText: item.aboutText,

  });

  newText.save();
});
//Testing ends


router.get("/about", (req, res) => {
    /* const str = [{
      name: "Halil Esmer",
      msg: "This is my first tweet",
      userName: "Taximinator",
    }]; */
    //res.end(JSON.stringify(str));
  /* res.end(JSON.stringify(data)); */
  About.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

router.post("/addTweets", (req, res) => { 
    req.end("NA");
});

//module.exports = router;
export default router
