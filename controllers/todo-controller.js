import Todo from "../models/todo-model.js";
export const addTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    console.log(req.body);
    res.status(200).json({ msg: "document created" });
  } catch (e) {
    res.status(500).json({ msg: e });
    console.log(e);
  }
};
