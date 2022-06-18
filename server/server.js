import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import aboutRoute from "./routes/aboutRoute.js";
import resumeRoute from "./routes/resumeRoute.js";
import projectsRoute from "./routes/projectsRoute.js";
import contactRoute from "./routes/contactRoute.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json({ limit: "20mb" }));

const options = {
  credentials: true,
  origin: ["http://localhost:3000", "https://www.esmer55.de"],
};
app.use(cors(options));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/', aboutRoute);
app.use("/about", aboutRoute);
app.use("/resume", resumeRoute);
app.use("/projects", projectsRoute);
app.use("/contact", contactRoute);

// test starts
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://www.esmer55.de"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// test ends


/* app.get('/', (req, res) => {
    res.json({ message: 'Port 4000' })
}) */

//Set the Nodemailer  - Send Email From ReactJS and Node App -ends

//app.use(cors({credentials: true, origin: 'https://halil-portfolio-webside.netlify.app'}))

app.post("/send_mail", async (req, res) => {
  let { firstN, lastN, phoneN, email, subjectText, message } = req.body;

  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

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
    `,
  });
});
// Set the Nodemailer  - Send Email From ReactJS and Node App -ends*/

app.listen(port, () => {
  console.log(`${port}. listen in port`);

  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
    })
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err));
});

/* 
//Set the Nodemailer  - Send Email From ReactJS and Node App -ends

const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(bodyParser.urlencoded({ extended: true }))
 app.use(bodyParser.json())

//app.use(cors({credentials: true, origin: 'https://halil-portfolio-webside.netlify.app'}))
app.use(cors)


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
// Set the Nodemailer  - Send Email From ReactJS and Node App -ends*/
