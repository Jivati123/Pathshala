// This is a simple uncontrolled form component in React
// - It uses native DOM access (via event.target) to fetch input values
// - It validates name, email, and city based on string length
// - If any field is invalid, an alert message is shown
// - Otherwise, the data is added to users state and a success alert is shown
// Note: This is an example of an uncontrolled form (no useState on inputs)

import React, { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    {
      username: "Likhilesh",
      city: "Mumbai",
      email: "likhilesh@programmingpathshala.com",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Get input values from the form using DOM
    const name = e.target.username.value;
    const email = e.target.email.value;
    const city = e.target.city.value;

    // Validate input fields
    if (name.length <= 2) {
      alert("Invalid name");
    } else if (city.length <= 1) {
      alert("Invalid city");
    } else if (email.length < 5) {
      alert("Invalid email");
    } else {
      alert("success!");

      // Add new user immutably
      setUsers((prev) => [
        ...prev,
        {
          username: name,
          city: city,
          email,
        },
      ]);

      // Optional: Reset form fields
      e.target.reset();
    }
  };

  console.log(users); // Show all users in console

  return (
    <>
      {/* Uncontrolled form - values are accessed directly from the DOM */}
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username" required placeholder="Enter name" />
        </div>
        <div>
          <input type="email" name="email" required placeholder="Enter email" />
        </div>
        <div>
          <input type="text" name="city" required placeholder="Enter city" />
        </div>
        <button type="submit">Add User</button>
      </form>
      <div>
        {users.map((elem) => {
          return (
            <div key={elem.email}>
              <h3>{elem.username}</h3>
              <p>{elem.email}</p>
              <h5>{elem.city}</h5>
            </div>
          );
        })}
      </div>

    </>
  );
};

export default App;
