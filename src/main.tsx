import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import ExpenseTrackerApp from "./ExpenseTrackerApp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ExpenseTrackerApp />
  </React.StrictMode>,
);
