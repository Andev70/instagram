import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: { type: String, required: [true, "todo title must be provided"] },
  description: {
    type: String,
    default:
      "i have to finished backlog from all the subjects so that it becomes nice",
  },
  timestamp: { type: Date, default: Date.now() },
});

export default mongoose.model("todos", todoSchema);
