import { useQuery } from "@tanstack/react-query";
import "./signup.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setEmail,
  setPassword,
  setUsername,
} from "../../../features/signup/signup.jsx";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const SignupForm = () => {
  {
    /* getting all states for signup page from the redux store*/
  }

  const { username, email, password } = useSelector(
    (state: any) => state.signup
  );

  {
    /*initialing the dispatch hook*/
  }

  const dispatch = useDispatch();

  {
    /*this is the react query for data fetching*/
  }

  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["signup"],
    queryFn: () => {
      return axios.post(
        "/api/v1/signup",
        { username, email, password },
        {
          headers: { "Content-type": "application/json" },
        }
      );
    },
    enabled: false,
  });

  if (data?.data.status === "ok") {
    return <Navigate to="/" />;
  }

  return (
    <div className="pt-4 pb-4 flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl text-center mb-8 font-bold">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-700 font-semibold">
              Name
            </label>
            <input
              onInput={(e) => {
                dispatch(setUsername(e.target.value));
              }}
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700 font-semibold">
              Email
            </label>
            <input
              onInput={(e) => {
                dispatch(setEmail(e.target.value));
              }}
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-gray-700 font-semibold">
              Password
            </label>
            <input
              onInput={(e) => {
                dispatch(setPassword(e.target.value));
              }}
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
              placeholder="Enter your password"
            />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              if (username && password && email) {
                refetch();
              } else {
                console.log("empty");
              }
            }}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
