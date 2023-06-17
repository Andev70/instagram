import getTodos from "../controllers/todo-controller.js";
import signup from "../controllers/signup.js";
import postTodo from "../controllers/posttodo.js";
import login from "../controllers/login.js";
import getuser from "../controllers/user.js";
import express from "express";
const router = express.Router();

// signup
// router.route("/:id").get(getuser);

router.route("/signup").post(signup);

// login

router.route("/login").post(login);

// todo related
router.route("/add/todo").post(postTodo);
router.route("/todos").get(getTodos);

export default router;
