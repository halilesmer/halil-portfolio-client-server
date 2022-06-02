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


/* Set the Nodemailer from youtube - Send Email From ReactJS and Node App -starts*/
const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(bodyParser.urlencoded({ extended: true }))
 app.use(bodyParser.json())

app.use(cors({credentials: true, origin: 'https://halil-portfolio-webside.netlify.app/'}))

app.post("/send_mail", cors(), async (req, res) => {
	let { firstN, lastN,phoneN, email, subjectText, message} = req.body

	const transport = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: process.env.MAIL_PORT,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS
		}
	})

	await transport.sendMail({
		from: process.env.MAIL_FROM,
		to: "halil@esmer.de",
		subject: `${subjectText}`,
		html: `<div style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>'You have a Message from ${firstN} ${lastN}'</h2>
        <p>First and Lastname: ${firstN} ${lastN}</p>
        <p>Phone: ${phoneN}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
    
         </div>
    `
	})
})
/* Set the Nodemailer from youtube - Send Email From ReactJS and Node App -ends*/


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
