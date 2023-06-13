const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    trim: true,
    unique: [true, "user already exists"],
  },
  password: { type: String, required: [true, "password is required"] },
  termsAndConditions: {
    type: Boolean,
    required: [true, "please accept our terms and conditions"],
  },
});

export default mongoose.model("users", userSchema);
