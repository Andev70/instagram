import {
  PageNotFound,
  Interface,
  LoginForm,
  SignupForm,
  HomeProtected,
  IfLogedin,
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
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default CompleteApp;
