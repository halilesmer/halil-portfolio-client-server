//IMPORTS
//const express = require("express");
import express from "express";
//const bodyParser = require('body-parser');
import bodyParser from "body-parser";
//const routesHandler = require('./routes/handler.js');
import routesHandler from "./routes/handler.js";
//const cors = require("cors");
import cors from 'cors';
const app = express();

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routesHandler); 
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
