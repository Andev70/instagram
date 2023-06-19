import React from "react";

const Navbar = () => {
  const handleLogout = () => {
    // Your logout logic goes here
    console.log("Logged out");
  };

  return (
    <nav className="bg-white shadow-lg h-14 ">
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
