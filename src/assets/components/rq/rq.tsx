import { useQuery } from "react-query";
import axios from "axios";

const RQsuperheroPage = () => {
  const { isLoading, data } = useQuery("data-set", () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos");
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(data?.data);
  return (
    <div className="container w-screen h-screen flex overflow-scroll ">
      <section className="wrap w-full h-max flex flex-col items-center gap-y-2">
        {data?.data.map((todo) => {
          return (
            <h1 className="todos" key={todo.id}>
              {todo.title}
            </h1>
          );
        })}
      </section>
    </div>
  );
};

export default RQsuperheroPage;
