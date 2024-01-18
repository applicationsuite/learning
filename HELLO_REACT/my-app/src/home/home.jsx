import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((responce) => responce.json())
      .then((categories) => {
        setCategories(categories);
      });
  });
  return (
    <div>
      <h3>Home</h3>
      <ol>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`products/${category}`}>{category.toUpperCase()}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
