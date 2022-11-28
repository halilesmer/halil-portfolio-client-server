import  express from "express";
import { getResumes } from "../controllers/resumesController.js";

const router = express.Router();

router.get("/halil", getResumes);

export default router;
