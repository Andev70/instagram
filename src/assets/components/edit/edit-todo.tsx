import "./edit.scss";
import { setModal, setSingleTodo } from "../../../features/data/single-tod";
import { useSelector, useDispatch } from "react-redux";
import {
  setStatus,
  setDescription,
  setTitle,
} from "../../../features/data/update-feature/updater";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const EditTodoModal = ({ descriptionProp, titleProp, statusProp }: any) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const { description, title, status } = useSelector(
    (state: any) => state.updater
  );
  let state: any = statusProp;

  const dispatch = useDispatch();

  const fetchApi = () => {
    return axios.patch(
      "/api/v1/update",
      {
        title: title,
        description: description,
        status: state,
        id: cookies.todoId,
      },
      {
        headers: {
          "Content-type": "application/json",
          authorization: cookies.token,
        },
      }
    );
  };
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["update-todo"],
    queryFn: () => {
      return fetchApi();
    },
    enabled: false,
  });
  if (data) {
    dispatch(setSingleTodo(data.data.updateTodo));
  }

  useEffect(() => {
    dispatch(setStatus(statusProp));
    dispatch(setTitle(titleProp));
    dispatch(setDescription(descriptionProp));
  }, []);
  return (
    <div className="bg-white mt-4 edit-modal rounded w-5/6 shadow-lg p-4 sm:w-96 md:w-2/3 lg:w-4/5 xl:w-3/4 2xl:w-1/2">
      <h2 className="text-2xl font-semibold mb-4 text-center">Edit Todo</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium text-lg mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full border rounded p-2"
            placeholder="Todo title"
            onInput={(e) => {
              e.preventDefault();
              if (!e.target.value) {
                return dispatch(setTitle(titleProp));
              }
              dispatch(setTitle(e.target.value));
            }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium text-lg mb-2">
            Status
          </label>
          <input
            type="text"
            id="status"
            className="w-full border rounded p-2"
            onChange={(e) => {
              if (e.target.value === "true") {
                state = true;
              } else if (e.target.value === "false") {
                state = false;
              }
            }}
            placeholder="eg: true or false"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            placeholder="Todo description"
            className="block font-medium text-lg mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            className="w-full border rounded p-2"
            onChange={(e) => {
              if (!e.target.value) {
                return dispatch(setDescription(descriptionProp));
              }
              dispatch(setDescription(e.target.value));
            }}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-2 bg-gray-200 px-4 py-2 rounded"
            onClick={(e) => {
              e.preventDefault();
              dispatch(setModal(false));
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={(e) => {
              refetch();
            }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTodoModal;
