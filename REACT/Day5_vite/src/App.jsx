import { useState } from "react";

// React will change the value of `remote` from undefined to the typed input
// Whenever the state of the component changes => component re-renders => function re-runs

const MainApp = () => {
  // Initial state is undefined
  const [monitor, remote] = useState(); // `monitor` is the current value, `remote` is the setter

  console.log("Rendered with monitor:", monitor); // Logs on every render

  const handleSearch = (e) => {
    const val = e.target.value; // Get input value
    remote(val); // Ask React to update the state

    // This console will show old value because state update is async
    console.log("Inside handleSearch, monitor is still:", monitor);
  };

  return (
    <div>
      <input type="text" onKeyUp={handleSearch} />
      <h2>{monitor}</h2>
    </div>
  );
};

export default MainApp;
