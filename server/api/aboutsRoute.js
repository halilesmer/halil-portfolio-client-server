import  express from "express";
import { getAbouts } from "../controllers/aboutsController.js";

const router = express.Router();

router.get("/halil", getAbouts);

export default router;
