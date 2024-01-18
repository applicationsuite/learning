import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export function Products() {
  const [products, setProducts] = useState([
    {
      id: 0,
      title: "",
      price: 0,
      image: "",
      description: "",
      rating: { rate: 0, count: 0 },
      category: "",
    },
  ]);
  let params = useParams();

  useEffect(() => {
    fetch(`http://fakestoreapi.com/products/category/${params.category}`)
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      }, []);
  });

  return (
    <div>
      <h3>{params.category.toUpperCase()}</h3>
      <div className="d-flex flex-warp">
        {products.map((product) => (
          <div className="card p-2 m-2" style={{ width: "150px" }}>
            <img src={product.image} className="card-img-top" height="100" />
            <div className="card-footer">
              <Link to={`/details/${product.id}`}>Details</Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/">Back to Category</Link>
    </div>
  );
}
