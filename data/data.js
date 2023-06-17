import axios from "axios";
import { useSelector } from "react-redux";
const data = () => {
  const { data } = useSelector((state) => state.data);
  return data;
};

export default data;
