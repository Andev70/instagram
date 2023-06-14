import { addTodo } from "../controllers/todo-controller.js";
import signup from "../controllers/signup.js";
import login from "../controllers/login.js";
import express from "express";
const router = express.Router();

// signup

router.route("/signup").post(signup);

// login

router.route("/login").post(login);

// todo related

router.route("/").post(addTodo);

export default router;
