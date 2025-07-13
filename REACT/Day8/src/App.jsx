import { useState } from "react";

const App = () => {
  // let username = "Likhilesh";
  const [monitor, controller] = useState("Jivati");

  const handleUsername = (e) => {
    const val = e.target.value;
    // username = val;
    controller(val);
    console.log("username:", monitor);
    // React uses 1 way data binding
  };

  return (
    <div>
      <input type="text" onKeyUp={handleUsername} />
      <h2>{monitor}</h2>
    </div>
  );
};

export default App;
