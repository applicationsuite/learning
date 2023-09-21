import { useState } from "react";

export function FormDemo3() {
  const [user, setUser] = useState({ Name: "", Age: 0, Mobile: "", City: "" });
  const [error, setError] = useState({
    Name: "",
    Age: "",
    Mobile: "",
    City: "",
  });

  function handleNameChange(e) {
    setUser({
      Name: e.target.value,
      Age: user.Age,
      Mobile: user.Mobile,
      City: user.City,
    });
  }

  function handleAgeChange(e) {
    setUser({
      Name: user.Name,
      Age: e.target.value,
      Mobile: user.Mobile,
      City: user.City,
    });
  }

  function handleMobileChange(e) {
    setUser({
      Name: user.Name,
      Age: user.Age,
      Mobile: e.target.value,
      City: user.City,
    });
  }

  function handleCityChange(e) {
    setUser({
      Name: user.Name,
      Age: user.Age,
      Mobile: user.Mobile,
      City: e.target.value,
    });

    if (e.target.value == "-1") {
      setError({
        Name: error.Name,
        Age: error.Age,
        City: "Please Select Your City",
        Mobile: error.Mobile,
      });
    } else {
      setError({
        Name: error.Name,
        Age: error.Age,
        City: "",
        Mobile: error.Mobile,
      });
    }
  }

  function ValidateUser() {
    if (user.Name == "") {
      setError({
        Name: "User Name Required",
        Age: error.Age,
        Mobile: error.Mobile,
        City: error.City,
      });
    } else {
      setError({
        Name: "",
        Age: error.Age,
        Mobile: error.Mobile,
        City: error.City,
      });
    }
  }

   function abc() {
     if (isNaN(user.Age)) {
       setError({
         Name: error.Name,
         Age: "Age must be a number",
         Mobile: error.Mobile,
         City: error.City,
       });
     } else {
       setError({
         Name: error.Name,
         Age: "",
         Mobile: error.Mobile,
         City: error.City,
       });
     }
   }

  function handleSubmitClick(e) {
    e.preventDefault();
    ValidateUser();
    abc()
  }

  function handleNameBlur() {
    ValidateUser();
  }
  function handleNameKeyUp() {
    ValidateUser();
  }

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmitClick}>
        <h3>Register User</h3>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input
              type="text"
              onKeyUp={handleNameKeyUp}
              onBlur={handleNameBlur}
              onChange={handleNameChange}
            />
          </dd>
          <dd className="text-danger">{error.Name}</dd>
          <dt>Age</dt>
          <dd>
            <input type="text" onChange={handleAgeChange} />
          </dd>
          <dd className="text-danger">{error.Age}</dd>
          <dt>Mobile</dt>
          <dd>
            <input type="text" onChange={handleMobileChange} />
          </dd>
          <dt>City</dt>
          <dd>
            <select onChange={handleCityChange}>
              <option value="-1">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyd">Hyd</option>
            </select>
          </dd>
          <dd className="text-danger">{error.City}</dd>
        </dl>
        <button>Submit</button>
      </form>
    </div>
  );
}
