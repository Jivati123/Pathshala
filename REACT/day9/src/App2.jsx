import { useState } from "react";

const App = () => {
  const [text, setText] = useState("Hello, World!"); // a

  const handleChange = (e) => {
    setText(e.target.value); // noted!
  };

  return (
    <div>
      {/* REACT: controlled component */}
      <input onChange={handleChange} value={text} />
      <p>{text}</p>
    </div>
  );
};

export default App;
