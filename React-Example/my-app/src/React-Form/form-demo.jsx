import { useState } from "react";

export function FormDemo() {
  const [user, setUser] = useState({ Name: "", Age: 0, Mobile: "", City: "" });

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
  }

  function handleSubmitClick(){
    alert(JSON.stringify(user))
  }
  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmitClick}>
        <h3>Register User</h3>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input type="text" onChange={handleNameChange} />
          </dd>
          <dt>Age</dt>
          <dd>
            <input type="text" onChange={handleAgeChange} />
          </dd>
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
        </dl>
        <button>Submit</button>
      </form>
    </div>
  );
}
