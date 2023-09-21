import { useState } from "react";
export function PracticeBinding() {
  const [product, setProduct] = useState({
    Name: "TV",
    Price: 0,
    City: "Select City",
    Stock: "false",
  });
  const [UpdateProduct, setUpdateProduct] = useState({
    Name: "TV",
    Price: 0,
    City: "Select City",
    Stock: "true",
  });

  function UpdateClick() {
    setUpdateProduct({
      Name: product.Name,
      Price: product.Price,
      City: product.City,
      Stock: product.Stock,
    });
  }

  function NameChange(e) {
    setProduct({
      Name: e.target.value,
      Price: product.Price,
      City: product.City,
      Stock: product.Stock,
    });
  }
  function PriceChange(e) {
    setProduct({
      Price: e.target.value,
      Name: product.Name,
      City: product.City,
      Stock: product.Stock,
    });
  }
  function CityChange(e) {
    setProduct({
      City: e.target.value,
      Name: product.Name,
      Price: product.Price,
      Stock: product.Stock,
    });
  }
  function StockChange(e) {
    setProduct({
      Stock: e.target.checked,
      Name: product.Name,
      Price: product.Price,
      City: product.City,
    });
  }
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-4">
          <dl>
            <dt>Name</dt>
            <dd>
              <input
                type="text"
                onChange={NameChange}
                value={product.Name}
                className="form-control"
              />
            </dd>
            <dt>Price</dt>
            <dd>
              <input
                type="number"
                onChange={PriceChange}
                value={product.Price}
                className="form-control"
              />
            </dd>
            <dt>City</dt>
            <dd>
              <select
                type="dropdown"
                onChange={CityChange}
                value={product.City}
                className="form-select"
              >
                <option>Select City</option>
                <option>Delhi</option>
                <option>Hyd</option>
                <option>Odisha</option>
                <option>Kolkata</option>
                <option>up</option>
                <option>Banglore</option>
                <option>pune</option>
                <option>Chennai</option>
              </select>
            </dd>
            <dt>Stock</dt>
            <dd className="form-switch">
              <input
                type="checkbox"
                onChange={StockChange}
                checked={product.Stock}
                className="form-check-input"
              />
              <label>
                {product.Stock == false ? "Out of stock" : "Available"}
              </label>
            </dd>
          </dl>
          <button onClick={UpdateClick} className="btn btn-primary w-100">
            Update
          </button>
        </div>
        <div className="col-8">
          <h2>Product Details</h2>
          <dl>
            <dt>Name</dt>
            <dd>{UpdateProduct.Name}</dd>
            <dt>Price</dt>
            <dd>{UpdateProduct.Price}</dd>
            <dt>City</dt>
            <dd>{UpdateProduct.City}</dd>
            <dt>Stock</dt>
            <dd>
              {UpdateProduct.Stock == false ? "Out of stock" : "Available"}
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
