import { useEffect, useRef, useState } from "react";

export function SlideShow() {
  const [product, setProduct] = useState({});
  const [status, setStatus] = useState("");
  let productId = useRef(1);
  let slideshow = useRef(null);

  function LoadProduct() {
    fetch(`http://fakestoreapi.com/products/${productId.current}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }

  function ChangeImagesAuto() {
    productId.current = productId.current + 1;
    fetch(`http://fakestoreapi.com/products/${productId.current}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }

  useEffect(() => {
    LoadProduct();
  }, []);

  function handlePrevClick() {
    productId.current = productId.current - 1;
    LoadProduct();
  }
  function handleNextClick() {
    productId.current = productId.current + 1;
    LoadProduct();
  }

  function handlePlayClick() {
    slideshow.current = setInterval(ChangeImagesAuto, 1000);
    setStatus("Slide Show - Started");
  }
  function handlePauseClick() {
    clearInterval(slideshow.current);
    setStatus("Slide Show - Paused");
  }

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="card p-2 mt-4 w-50">
        
        <div className="card-body text-center">
          <div className="row">
            <div className="col-1">
              <button onClick={handlePrevClick} className="btn btn-primary">
                {" "}
                &lt;{" "}
              </button>
            </div>
            <div className="col-10">
              <img width="100%" src={product.image} height="300" />
            </div>
            <div className="col-1">
              <button onClick={handleNextClick} className="btn btn-primary">
                {" "}
                &gt;{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <button onClick={handlePlayClick} className="btn btn-outline-primary">
            <span className="bi bi-play"></span>
          </button>
          <button
            onClick={handlePauseClick}
            className="btn btn-outline-danger ms-2"
          >
            <span className="bi bi-pause"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
