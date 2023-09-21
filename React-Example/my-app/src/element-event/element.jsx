import { useState } from "react";

export function ElementState() {
  const [msg, setMsg] = useState("");
  const [cityError, setCityError] = useState("");

  function NameBlur(e) {
    if (e.target.value == "") {
      setMsg("User Name Required");
    } else {
      setMsg("");
    }
  }
  function VerifyCity(e) {
    if (e.target.value == "-1") {
      setCityError("Please Select Your City");
    } else {
      setCityError("");
    }
  }

  return (
    <div className="container-fluid">
      <div>
        <p>Selecting Text is disable in this page.</p>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input
              type="text"
              onBlur={NameBlur}
              placeholder="Name in Block Letters"
            />
          </dd>
          <dd className="text-danger">{msg}</dd>
          <dt>Your City</dt>
          <dd>
            <select onChange={VerifyCity}>
              <option value="-1">Select Your City</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyd">Hyd</option>
            </select>
          </dd>
          <dd className="text-danger">{cityError}</dd>
        </dl>
      </div>
    </div>
  );
}
