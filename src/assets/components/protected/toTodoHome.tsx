import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const IfLogedin = ({ children }: any) => {
  const { isLogedIn } = useSelector((state: any) => state.todo);

  if (isLogedIn) {
    return <Navigate to="/todo/user" />;
  }
  return children;
};

export default IfLogedin;
