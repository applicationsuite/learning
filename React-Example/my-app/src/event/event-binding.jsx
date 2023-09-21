import { useState, useEffect } from "react";
import "./event-binding.css";

export function EventBinding() {
  const [mobiles, setMobiles] = useState([{ img_src: "" }]);
  const [preview, setPreview] = useState("images/M1.jpg");

  useEffect(() => {
    fetch("mobiles.json")
      .then((responce) => responce.json())
      .then((pic) => setMobiles(pic));
  },[]);

  function DisplayImage(e) {
    setPreview(e.target.src);
  }
  return (
    <div className="container-fluid">
      <h2>Realme</h2>
      <div className="row">
        <div className="col-2 ">
          {mobiles.map((mobile) => (
            <div
              className="mb-2 border border-dark border-2 "
              style={{ width: "105px" }}
            >
              <img
                src={mobile.img_src}
                width="100"
                height="100"
                onMouseOver={DisplayImage}
              />
            </div>
          ))}
        </div>
        <div className="col-10">
          <img src={preview} width="500" height="600" />
        </div>
      </div>
    </div>
  );
}
