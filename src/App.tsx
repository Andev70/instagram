import { PageNotFound } from "./assets/components/";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const CompleteApp = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default CompleteApp;
