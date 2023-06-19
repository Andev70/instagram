import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { resetLogin, setLogin } from "../../../features/cart/cart";
import { useCookies } from "react-cookie";

const HomeProtected = ({ children }: any) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const { isLogedIn } = useSelector((state: any) => {
    return state.todo;
  });
  const dispatch = useDispatch();
  if (!isLogedIn) {
    return (location.href = "/");
  }
  return children;
};

export default HomeProtected;
