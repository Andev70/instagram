import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { resetLogin } from "../../../features/cart/cart";
const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const { isLogedIn } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const handleLogout = () => {
    removeCookie("token");
    dispatch(resetLogin());
  };

  return (
    <nav className="bg-white pr-4 shadow-lg h-14 ">
      <div className="container mx-auto flex justify-end items-center h-full">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
