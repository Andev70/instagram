import {
  PageNotFound,
  Interface,
  LoginForm,
  SignupForm,
  HomeProtected,
  IfLogedin,
  TodoDetails,
} from "./assets/components/";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const CompleteApp = () => {
  return (
    <Routes>
      <Route path="/signup/email" element={<SignupForm />} />
      <Route
        path="/"
        element={
          <IfLogedin>
            <LoginForm />
          </IfLogedin>
        }
      />
      <Route
        path="/todo/user"
        element={
          <HomeProtected>
            <Interface />
          </HomeProtected>
        }
      />
      <Route
        path="/todo/details/:id"
        element={
          <HomeProtected>
            <TodoDetails />
          </HomeProtected>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default CompleteApp;
