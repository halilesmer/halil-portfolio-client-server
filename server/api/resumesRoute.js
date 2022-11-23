import  express from "express";
import { getResumes } from "../controllers/resumesController.js";

const router = express.Router();

router.get("/", getResumes);

export default router;
