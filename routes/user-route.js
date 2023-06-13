import { testFile, testVim } from "../controllers/user-controller.js";
import express from "express";
const router = express.Router();

router.route("/").post(testFile);
router.route("/vim").post(testVim);

export default router;
