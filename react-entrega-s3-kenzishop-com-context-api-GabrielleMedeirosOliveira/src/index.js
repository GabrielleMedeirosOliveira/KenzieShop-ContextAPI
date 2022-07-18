import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Providers from "./providers";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer
      toastStyle={{ backgroundColor: "#212529", color: "#fff" }}
    />
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
