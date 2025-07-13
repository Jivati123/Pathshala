import { useState } from "react";

// initial-render (1st) --> state is created
// react will change the state --> "John" to "a"
// state change has happened! --> re-render the component --> re-run the function (line-by-line)
// re-render --> react will not create state once again, instead it will remember the value (new value)

import { useState } from "react";

const App = () => {
  const [monitor, controller] = useState("");

  const handleUsername = (e) => {
    const val = e.target.value;
    console.log("🔸 val:", val);
    controller(val);
  };

  const handleCheck = (e) => {
  const key = e.key;
  console.log("🔸 keydown:", key);
  if (key === "z") {
    e.preventDefault();
  }
};


  return (
    <div>
      <input
        type="text"
        onChange={handleUsername}
        value={monitor}
        onKeyDown={handleCheck}
      />
      <h2>{monitor}</h2>
    </div>
  );
};

export default App;


// पहली बार जब component चलता है, तो "John" दिखता है।
// जब आप कुछ टाइप करते हो, React को बताया जाता है — value बदल गई।
// React दुबारा से component को चलाता है, लेकिन इस बार नई value के साथ।
// UI भी नए value के साथ अपडेट हो जाता है।
