import { useState } from "react";

export function TouchDemo() {
  const [msg, setMsg] = useState("");

  function GetDetails(e) {
    switch (e.target.id) {
      case "men":
        setMsg("40% OFF on Men Clothing - Offer Ends 31-Aug-2023");
        break;
      case "women":
        setMsg("SALE on Women Fashion - 50% OFF");
        break;
    }
  }

  return (
    <div className="container-fluid">
      <h3>Fashion Store</h3>
      <img
        src="Images/m1.jpg"
        id="men"
        onTouchStart={GetDetails}
        width="200"
        height="300"
      />
      <img
        src="images/m6.jpg"
        id="women"
        onTouchStart={GetDetails}
        width="200"
        height="300"
      />
      <h3>{msg}</h3>
    </div>
  );
}
