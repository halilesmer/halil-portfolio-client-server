//const express = require("express");
import express from "express";

//const bodyParser = require('body-parser');
import bodyParser from "body-parser";

//const routesHandler = require('./routes/handler.js');
import routesHandler from "./routes/handler.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routesHandler);
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
