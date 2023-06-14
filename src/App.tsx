import {
  PageNotFound,
  Interface,
  LoginForm,
  SignupForm,
} from "./assets/components/";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const CompleteApp = () => {
  return (
    <Routes>
      <Route path="/signup/email" element={<SignupForm />} />
      <Route path="/" element={<LoginForm />} />
      <Route path="/:id" element={<Interface />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default CompleteApp;
