import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./Global.css";
import { Provider } from "react-redux";
import store from "./store";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Toaster />
    <App />
  </Provider>
);
