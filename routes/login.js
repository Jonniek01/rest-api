import express from "express";
import { logIn } from "../controllers/login.js";
const router = express.Router();

router.post('/',logIn)
export default router;