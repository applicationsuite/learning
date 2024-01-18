import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export function Details() {
  let params = useParams();
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    price: 0,
    image: "",
    description: "",
    rating: { rate: 0, count: 0 },
    category: "",
  });
  useEffect(() => {
    fetch(`http://fakestoreapi.com/products/${params.id}`)
      .then((response) => response.json())
      .then((product) => {
        setProduct(product);
      });
  }, []);
  return (
    <div>
      <h3>Details</h3>
      <div className="row">
        <div className="col-4">
          <img src={product.image} width="100%" height="250" />
        </div>
        <div className="col-8">
          <dl>
            <dt>Title</dt>
            <dd>{product.title}</dd>
            <dt>Price</dt>
            <dd>{product.price}</dd>
            <dt>Rating</dt>
            <dd>
              {product.rating.rate}{" "}
              <span className="bi bi-star-fill text-success"></span> [
              {product.rating.count}]
            </dd>
          </dl>
        </div>
      </div>
      <p>
        <Link to={`/products/${product.category}`}>Back to Products</Link>
      </p>
    </div>
  );
}
