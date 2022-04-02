//const express = require("express");
import express from "express";
const router = express.Router();

import { data } from "../data/data.js";



router.get("/about", (req, res) => {
    /* const str = [{
      name: "Halil Esmer",
      msg: "This is my first tweet",
      userName: "Taximinator",
    }]; */
    //res.end(JSON.stringify(str));
    res.end(JSON.stringify(data)); 
});

router.post("/addTweets", (req, res) => { 
    req.end("NA");
});

export default router
//module.exports = router;
