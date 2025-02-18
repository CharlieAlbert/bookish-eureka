import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "semantic-ui-css/semantic.min.css";
import reportWebVitals from "./reportWebVitals";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Router>
        <Routes>
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/" element={<App />} />
        </Routes>
      </Router>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
