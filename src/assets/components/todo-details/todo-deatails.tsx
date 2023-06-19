import { useCookies } from "react-cookie";
import EditTodoModal from "../edit/edit-todo";

import {
  setSingleTodo,
  setModal,
  setIsLoading,
} from "../../../features/data/single-tod";

import { resetLogin } from "../../../features/cart/cart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const TodoDetails = () => {
  const { singleTodo, isEditModal, isLoading } = useSelector(
    (state: any) => state.singleTodo
  );
  const dispatch = useDispatch();
  const [cookies] = useCookies();
  const todoId = cookies.todoId;
  const getTodo = async (id: any) => {
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
      dispatch(setIsLoading(false));
      dispatch(setSingleTodo(res.todo));
    });
  }, []);

  if (!cookies.token) {
    dispatch(resetLogin());
    return;
  }
  return (
    <div className="container mx-auto p-4 relative">
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
            disabled
            type="text"
            id="title"
            value={isLoading ? "title loading..." : singleTodo.title}
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
            disabled
            value={
              isLoading ? "description loading..." : singleTodo.description
            }
            id="description"
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
            disabled
            type="text"
            id="due-date"
            value={isLoading ? "date loading..." : singleTodo.timestamp}
            className="w-full px-4 py-2 border rounded bg-gray-100 text-gray-800"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="edit-status"
            className="block font-medium text-gray-700 mb-1"
          >
            Edit status
          </label>
          <input
            disabled
            type="text"
            id="edit-status"
            value={
              isLoading
                ? "edit status loading..."
                : `edited ${singleTodo.__v} times`
            }
            className="w-full px-4 py-2 border rounded bg-gray-100 text-gray-800"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="due-date"
            className="block font-medium text-gray-700 mb-1"
          >
            Status
          </label>
          <input
            disabled
            type="text"
            id="status"
            value={isLoading ? "status loading..." : singleTodo.status}
            className="w-full px-4 py-2 border rounded bg-gray-100 text-gray-800"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(setModal(true));
            }}
            type="button"
            className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        </div>
      </div>
      {isEditModal ? (
        <EditTodoModal
          descriptionProp={singleTodo.description}
          statusProp={singleTodo.status}
          titleProp={singleTodo.title}
          version={singleTodo.__v}
        />
      ) : null}
    </div>
  );
};
export default TodoDetails;
