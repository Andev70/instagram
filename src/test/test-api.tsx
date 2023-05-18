import axios from "axios";
import { useState } from "react";
const TestApi = () => {
  const [file, setfile] = useState(null);
  const formData = new FormData();
  formData.append("name", "al");
  formData.append("image", file);

  //using expressfile upload is absolutly importamt to send form data
  const getData = async () => {
    axios
      .post("/api/test", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <input
        type="file"
        multiple
        onChange={(e) => {
          setfile(e.target.files[0]);
        }}
        name="image"
      />
      <button
        onClick={() => {
          getData();
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default TestApi;
