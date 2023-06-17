import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  userId: { type: String },
  title: { type: String, required: [true, "todo title must be provided"] },
  description: {
    type: String,
    default: "description is not provided",
  },
  timestamp: { type: Number, default: Date.now() },
});

export default mongoose.model("todos", todoSchema);
