import { testFile } from "../controllers/user-controller.js";
import express from "express";
const router = express.Router();

router.route("/").post(testFile);

export default router;
