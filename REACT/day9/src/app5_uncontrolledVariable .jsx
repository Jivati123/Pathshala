// ❗ uncontrolled component — REACT

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.username.value;
    console.log("🔵 name:", name);
    const city = e.target.city.value;
    console.log("🟡 city:", city);
    const email = e.target.email.value;
    console.log("🟠 email:", email);

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
    <>
      {/* We were getting the value from an event but the control was always with DOM */}
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username" required />
        </div>
        <div>
          <input type="email" name="email" required />
        </div>
        <div>
          <input type="text" name="city" required />
        </div>
        <button>Add User</button>
      </form>
    </>
  );
};

export default App;


//Task is to add user and if possible create the array whenever user clicks on Add user 

