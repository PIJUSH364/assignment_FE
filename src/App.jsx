import React from "react";
import Navbar from "./components/contactManagement/Navbar";
import Home from "./components/contactManagement/Home";

const App = () => {
  return (
    <div className="bg-black text-white h-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Home />
      </div>
    </div>
  );
};

export default App;
