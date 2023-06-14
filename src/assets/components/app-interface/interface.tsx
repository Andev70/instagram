import "./interface.scss";

const Interface = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gray-200 px-4 py-6">
          <h1 className="text-2xl text-gray-800 font-bold">Todo List</h1>
        </div>
        <div className="bg-white px-4 py-6">
          <form className="mb-4">
            <div className="flex items-center border-b border-gray-200 pb-2">
              <input
                type="text"
                className="flex-grow outline-none px-2 py-1 text-gray-700"
                placeholder="Add a task..."
              />
              <button
                type="submit"
                className="ml-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
              >
                Add
              </button>
            </div>
          </form>
          <ul className="space-y-4">
            <li className="todo-item flex items-center justify-between px-2 py-2 bg-white border-b border-gray-200">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-800">Task 1</span>
              </div>
              <div>
                <button className="text-gray-500 mr-2">Edit</button>
                <button className="text-gray-500">Delete</button>
              </div>
            </li>
            <li className="todo-item flex items-center justify-between px-2 py-2 bg-white border-b border-gray-200">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-800">Task 2</span>
              </div>
              <div>
                <button className="text-gray-500 mr-2">Edit</button>
                <button className="text-gray-500">Delete</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Interface;
