import "./styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
root.render(<App />);

// const domContainer = document.querySelector("#App");
// const root = ReactDOM.createRoot(domContainer);
// root.render(<App />);
