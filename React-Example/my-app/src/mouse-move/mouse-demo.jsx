import { useState } from "react";

export function MouseDemo() {
  return (
    <div className="container-fluid">
      <marquee
        scrollamount="15"
        className="mt-4"
        onMouseOut={(e) => {
          e.target.start();
        }}
        onMouseOver={(e) => {
          e.target.stop();
        }}
      >
        <img src="images/m1.jpg" width="200" height="200"  className="me-4" />
        <img src="images/m2.jpg" width="200" height="200"  className="me-4" />
        <img src="images/m3.jpg" width="200" height="200"  className="me-4" />
        <img src="images/m4.jpg" width="200" height="200"  className="me-4" />
        <img src="images/m5.jpg" width="200" height="200"  className="me-4" />
      </marquee>
    </div>
  );
}
