import { useState } from "react";

const App = () => {
  // Step 1: Initialize state with data from localStorage
  const [fruits, setFruits] = useState(() => {
    const savedFruits = localStorage.getItem("fruits"); // text (string) (JSON)
    if (savedFruits) {
      const arr = JSON.parse(savedFruits); // convert string (JSON) --> Array/Object
      return arr;
    } else {
      return [];
    }
  });

  // Step 2: Handle form submission
  const handleAddFruit = (e) => {
    e.preventDefault();

    const fruitName = e.target.fruitName.value;

    setFruits((prev) => {
      const newArr = [...prev];
      newArr.push(fruitName);

      // Save to localStorage as string
      localStorage.setItem("fruits", JSON.stringify(newArr)); // convert Array/Object --> string (JSON)
      return newArr;
    });

    e.target.reset(); // optional: clear input after submit
  };

  return (
    <div>
      {/* Fruit Input Form */}
      <form onSubmit={handleAddFruit}>
        <input type="text" placeholder="fruit name" name="fruitName" required />
        <br />
        <br />
        <button>Submit</button>
      </form>

      {/* Display List of Fruits */}
      <div>
        {fruits.map((elem) => {
          return (
            <div key={elem}>
              <p>{elem}</p>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
