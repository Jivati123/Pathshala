import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; // default import

const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

// reactRoot.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import { useState } from "react";

// initial-render --> re-render
const MainApp = () => {
  const [monitor, remote] = useState(); // a

  console.log(monitor); // a

  const handleSearch = (e) => {
    const val = e.target.value; //
    remote(val); // please change the value to "ab" --> Noted!
    console.log(monitor); //
  };

  return (
    <div>
      <input type="text" onKeyUp={handleSearch} />
      <h2>{monitor}</h2>
    </div>
  );
};

export default MainApp;
