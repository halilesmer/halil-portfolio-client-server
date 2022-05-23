require("dotenv").config({ path: "./config.env" });
const path = require('path');
const express = require("express");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/v1/posts", postRoutes);


// from tutorial -starts
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client, build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('Api running...')

    })

    app.get('/api/resume', (req, res) => {
        res.send({ 'pdfLink': 'https://www.docdroid.net/q3H6zSm/2022-02-24-cv-halil-pdf' })
    })
}
// from tutorial -ends

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
