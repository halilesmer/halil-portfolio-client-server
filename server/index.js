import aboutsRoute from "./api/aboutsRoute.js";
import bodyParser from "body-parser";
import { connectMdb } from "./util/connectMdb.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import projectsRoute from "./api/projectsRoute.js";
import resumesRoute from "./api/resumesRoute.js";

const port = process.env.PORT || 4000;

const app = express();
// app.use(bodyParser.json());

dotenv.config();
app.use(express.json({ extended: false }));
// app.use(express.json({ limit: "20mb" }));

const addMiddelWare = () => {
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  const options = {
    credentials: true,
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://www.esmer.de/",
      "http://www.esmer.de/",
      "https://halil-portfolio-client-ao2kzqruw-halilesmer.vercel.app/",
      "https://halil-portfolio-client.vercel.app/",
      "https://halil-portfolio-client-halilesmer.vercel.app/",
      "https://halil-portfolio-client-git-main-halilesmer.vercel.app/",
    ],
  };
  app.use(cors(options));
};

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

const loadRoutes = () => {
  app.use("/api/abouts", aboutsRoute);
  app.use("/api/resumes", resumesRoute);
  app.use("/api/projects", projectsRoute);
};

(function controller() {
  addMiddelWare();
  connectMdb();
  loadRoutes();
})();

//app.use(cors({credentials: true, origin: 'https://halil-portfolio-webside.netlify.app'}))

//Set the Nodemailer  - Send Email From ReactJS and Node App -starts
app.post("/api/send_mail", async (req, res) => {
  let { firstN, lastN, phoneN, email, subjectText, message } = req.body;

  let configOptions = {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2",
    },
  };

  try {
    const transport = nodemailer.createTransport(configOptions);

    const emailSent = await transport.sendMail({
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
    console.log("emailSent", emailSent);
    res.status(200).json({ message: "email successfully sent" });
  } catch (err) {
    res.status(500).json({ message: "error", error: err });
  }
});
// Set the Nodemailer  - Send Email From ReactJS and Node App -ends*/

app.listen(port, (req, res) => {
  console.log(`Server is running on ${port} port`);
});
