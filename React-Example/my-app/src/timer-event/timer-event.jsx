import { useEffect, useState } from "react";

export function ElementStateee() {
  const [buttonContainer, setButtonContainer] = useState({ display: "block" });
  const [loadingContainer, setLoadingContainer] = useState({ display: "none" });
  const [imageContainer, setImageContainer] = useState({ display: "none" });
  const [count, setCount] = useState(0);

  var i = 0;
  function LoadImage() {
    i++;
    setCount(i);
    if (i == 100) {
      setLoadingContainer({ display: "none" });
      setImageContainer({ display: "block" });
      return;
    }
  }

  function LoadClick() {
    setInterval(LoadImage, 200);
    setButtonContainer({ display: "none" });
    setLoadingContainer({ display: "block" });
  }

  useEffect(() => {}, []);

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div>
        <div style={buttonContainer}>
          <button onClick={LoadClick} className="btn btn-primary">
            Load Image
          </button>
        </div>
        <div style={loadingContainer} className="text-center">
          <div className="spinner-border text-success"></div>
          <div>{count} % completed</div>
        </div>
        <div style={imageContainer}>
          <img src="realme10.jpg" width="300" height="400" />
        </div>
      </div>
    </div>
  );
}
