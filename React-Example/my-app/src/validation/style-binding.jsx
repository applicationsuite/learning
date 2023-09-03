import { useState, useEffect } from "react";

export function StyleBinding() {
  const [styleObj, setStyleObj] = useState({ display: "none" });

  function handlePriviewChange(e) {
    if (e.target.checked) {
      setStyleObj({ display: "block" });
    } else {
      setStyleObj({ display: "none" });
    }
  }

  return (
    <div className="container-fluid">
      <h2>Product Details</h2>
      <dl>
        <dt>Name</dt>
        <dd>Realme 10</dd>
        <dt>
          Preview
          <span className="form-switch">
            <input
              type="checkbox"
              onChange={handlePriviewChange}
              className="form-check-input"
            />
          </span>
        </dt>
        <dd style={styleObj}>
          <img src="realme10.jpg" />
        </dd>
      </dl>
    </div>
  );
}
