import { useState, useEffect } from "react";

export function Shopping() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 0,
      title: "",
      image: "",
      price: 0,
      description: "",
      category: "",
      rating: { rate: 0, count: 0 },
    },
  ]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  function LoadCategories() {
    fetch("http://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((categories) => {
        categories.unshift("all");
        setCategories(categories);
      });
  }

  function LoadProducts(url) {
    fetch(url)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
  }

  useEffect(() => {
    LoadCategories();
    LoadProducts("http://fakestoreapi.com/products");
  }, []);

  function handleCategoryChange(e) {
    if (e.target.value == "all") {
      LoadProducts("http://fakestoreapi.com/products");
    } else {
      LoadProducts(
        `http://fakestoreapi.com/products/category/${e.target.value}`
      );
    }
  }

  function handleAddToCartClick(e) {
    fetch(`http://fakestoreapi.com/products/${e.target.value}`)
      .then((res) => res.json())
      .then((product) => {
        cartItems.push(product);
        setCartCount(cartItems.length);
        alert(`${product.title}\nAdded to Cart`);
      });
  }

  return (
    <div className="container-fluid ">
      <header className="d-flex justify-content-between p-3 bg-dark text-white">
        <div>
          <span className="h4">Shopper.</span>
        </div>
        <div>
          <span className="me-3">Home</span>
          <span className="me-3">Electronics</span>
          <span className="me-3">Jewelery</span>
          <span className="me-3">Men's Fashion</span>
          <span className="me-3">Women's Fashion</span>
        </div>
        <div>
          <button className="btn btn-light position-relative">
            <span className="bi bi-cart4"></span> Your Cart
            <span className="badge rounded-circle bg-danger position-absolute top-0 end-0">
              {cartCount}
            </span>
          </button>
        </div>
      </header>
      <section className="row mt-3">
        <nav className="col-2">
          <div>
            <label className="form-label fw-bold">Select Category</label>
            <div>
              <select onChange={handleCategoryChange} className="form-select">
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </nav>
        <main className="col-7">
          <div
            className="d-flex flex-wrap overflow-auto"
            style={{ height: "750px" }}
          >
            {products.map((product) => (
              <div className="card p-2 m-2 " style={{ width: "200px" }}>
                <img
                  src={product.image}
                  className="card-img-top"
                  height="140"
                />
                <div
                  className="card-header overflow-auto"
                  style={{ heigh: "140px" }}
                >
                  {product.title}
                </div>
                <div className="card-body">
                  <dl>
                    <dt>Price</dt>
                    <dt>
                      {product.price.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </dt>
                  </dl>
                </div>
                <div className="card-footer">
                  <button
                    value={product.id}
                    onClick={handleAddToCartClick}
                    className="btn btn-danger w-100"
                  >
                    <span className="bi bi-cart3"></span>Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
        <aside className="col-3">
          <table className="table table-hover caption-top overflow-auto">
            <caption> Your Cart Summary</caption>
            <thead>
              <tr>
                <th>Title</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr>
                  <td>{item.title}</td>
                  <td>
                    <img src={item.image} width="50" height="50" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </aside>
      </section>
    </div>
  );
}
