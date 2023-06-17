import User from "../models/user-model.js";
import bcrypt from "bcryptjs";

const signup = async (req, res) => {
  try {
    const request = req.body;
    // check if user exists
    const reqEmail = request.email;
    const requestUser = await User.findOne({ email: reqEmail });
    if (requestUser) {
      return res.status(401).json({ msg: "user already registered" });
    }

    // check all of the at once

    if (
      request.username === "" &&
      request.password === "" &&
      request.email === ""
    ) {
      return res.status(401).json({ message: "require credentials" });
    }

    // check individual fields

    if (request.password === "") {
      return res.status(401).json({ msg: "password is required" });
    } else if (request.username === "") {
      return res.status(401).json({ msg: "username is required" });
    } else if (request.email === "") {
      return res.status(401).json({ msg: "email is required" });
    }

    // hash password using bcrypt

    const plainPassword = request.password;

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(plainPassword, salt);

    // set hashed password to body password

    request.password = hashedPassword;

    // send to data base

    const user = await User.create(req.body);

    // check if user is created

    if (!user)
      return res.status(401).json({ msg: "error occured while creating user" });

    // let them  know that the use is created successfully

    res.status(201).json({ msg: "registered successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: ["server error", e] });
  }
};

export default signup;
