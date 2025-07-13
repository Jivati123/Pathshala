import React from "react"; // if it's user defined, is it internal nodejs, node_modules?
import ReactDOM from "react-dom/client";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";



const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
  console.log("Likhilesh");
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

reactRoot.render(<App />);

//This is the main command that launches your React app.


