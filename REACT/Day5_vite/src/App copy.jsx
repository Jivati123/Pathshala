import { useState } from "react";

const MainApp = () => {
  const [counter, setCounter] = useState(0); // Initial value is 0

  const handleIncrement = () => {
    setCounter((prev) => {
      return prev + 1;
    });

    setCounter((prev) => {
      return prev + 1;
    });
  };


  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>++</button>
    </div>
  );
};

export default MainApp;
