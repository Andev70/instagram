import "./interface.scss";
import { useDispatch, useSelector } from "react-redux";
import { setData, pushData } from "../../../features/data/data";
import { setTitle } from "../../../features/data/title";
import { useCookies } from "react-cookie";
import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react";

const Interface = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const { data } = useSelector((state) => state.data);

  const token = cookies.token;
  const delTodo = async (e) => {
    const id = e.target.value;
    try {
      const res = await fetch("/api/v1/delete", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          authorization: token,
          id: id,
        },
      });
      const data = res.json();
      return data;
    } catch (error) {
      console.log(e.message);
    }
  };

  const dispatch = useDispatch();
  const { todoTitle } = useSelector((state) => state.title);
  const fetchTodos = async () => {
    try {
      const res = await fetch("/api/v1/todos", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: token,
        },
      });
      const data = res.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchTodos().then((res) => {
      dispatch(setData(res.todos));
    });
  }, []);

  const postTodo = async () => {
    try {
      const res = await fetch("/api/v1/add/todo", {
        method: "POST",
        headers: { "Content-type": "application/json", authorization: token },
        body: JSON.stringify({ title: todoTitle }),
      });
      const data = res.json();
      return data;
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gray-200 px-4 py-6">
          <h1 className="text-2xl text-gray-800 font-bold">Todo List</h1>
        </div>
        <div className="bg-white px-4 py-6">
          <form className="mb-4">
            <div className="flex items-center border-b border-gray-200 pb-2">
              <input
                onInput={(e) => {
                  dispatch(setTitle(e.target.value));
                }}
                type="text"
                className="flex-grow outline-none px-2 py-1 text-gray-700"
                placeholder="Add a task..."
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  postTodo().then((res) => {
                    console.log(res);
                    if (res.status === "ok") {
                      dispatch(pushData(res.todo));
                    }
                  });
                }}
                type="submit"
                className="ml-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
              >
                Add
              </button>
            </div>
          </form>
          <ul className="space-y-4">
            {/*<li className="todo-item flex items-center justify-between px-2 py-2 bg-white border-b border-gray-200">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-800">Task 1</span>
              </div>
              <div>
                <button className="text-gray-500 mr-2">Edit</button>
                <button className="text-gray-500">Delete</button>
              </div>
            </li>
            <li className="todo-item flex items-center justify-between px-2 py-2 bg-white border-b border-gray-200">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-800">Task 2</span>
              </div>
              <div>
                <button className="text-gray-500 mr-2">Edit</button>
                <button className="text-gray-500">Delete</button>
              </div>
            </li>*/}
            {data.map((todo) => {
              return (
                <li className="todo-item flex items-center justify-between px-2 py-2 bg-white border-b border-gray-200">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-800">{todo.title}</span>
                  </div>
                  <div>
                    <Link to={`/todo/details/${todo._id}`}>
                      <button
                        value={todo._id}
                        onClick={(e) => {
                          const todoId = e.target.value;
                          setCookie("todoId", todoId, { path: "/" });
                        }}
                        className="text-gray-500 mr-2"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        delTodo(e).then((res) => {
                          console.log(res);
                          dispatch(setData(res.todos));
                        });
                      }}
                      value={todo._id}
                      className="text-gray-500"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Interface;
