import React from "react";
import Navbar from "./components/contactManagement/Navbar";
import Home from "./components/contactManagement/Home";

const App = () => {
  return (
    <div className="box-border">
      <div className="bg-black text-white h-100">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default App;
