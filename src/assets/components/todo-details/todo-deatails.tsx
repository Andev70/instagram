import { useCookies } from "react-cookie";
import { setSingleTodo } from "../../../features/data/single-tod";
import { Navigate } from "react-router-dom";
import { resetLogin } from "../../../features/cart/cart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const TodoDetails = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies();
  const todoId = cookies.todoId;
  const getTodo = async (id) => {
    try {
      const res = await fetch(`/api/v1/${id}`, {
        method: "GET",
        headers: {
          "Content-type": "Application/json",
          authorization: cookies.token,
        },
      });
      const data = res.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTodo(todoId).then((res) => {
      dispatch(setSingleTodo(res.todo));
    });
  }, []);
  const { singleTodo } = useSelector((state) => state.singleTodo);

  if (!cookies.token) {
    dispatch(resetLogin());
    return;
  }
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow p-8">
        <div className="border-b mb-4 pb-3">
          <h2 className="text-2xl font-semibold text-gray-800">Todo Details</h2>
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={singleTodo.title}
            disabled
            className="w-full px-4 py-2 border rounded bg-gray-100 text-gray-800"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            value={singleTodo.description}
            id="description"
            disabled
            className="w-full px-4 py-2 border rounded bg-gray-100 text-gray-800"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="due-date"
            className="block font-medium text-gray-700 mb-1"
          >
            Due Date
          </label>
          <input
            type="text"
            id="due-date"
            value="2023-06-30"
            disabled
            className="w-full px-4 py-2 border rounded bg-gray-100 text-gray-800"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoDetails;
