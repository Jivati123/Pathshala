import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (name.length <= 2) {
      alert("Invalid name");
    } else if (city.length <= 1) {
      alert("Invalid city");
    } else if (email.length < 5) {
      alert("Invalid email");
    } else {
      alert("Success!");
    }
  };

  return (
    <div>
      <div>
        {/* controlled component -- REACT */}
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>

  );
  <div>
    <h3>{name}</h3>
    <p>{email}</p>
    <h4>{city}</h4>
  </div>

};

export default App;
