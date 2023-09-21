import { DataGrid } from "./data-grid";
import { useState, useEffect } from "react";

export function PropsDemos() {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  function LoadColumns() {
    fetch("http://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((product) => {
        delete product.rating;
        setColumns(Object.keys(product));
      });
  }

  function LoadData() {
    fetch("http://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        products.map((product) => {
          delete product.rating;
        });
        setRows(products);
      });
  }

  useEffect(() => {
    LoadColumns();
    LoadData();
  }, []);

  return (
    <div className="container-fluid">
      <h3>Fake Store Data</h3>
      <DataGrid
        caption="Fakestore Data"
        theme="table-danger"
        fields={columns}
        data={rows}
      />
      <h3>Products Grid</h3>
      <DataGrid
        caption="Product Details"
        theme="table-primary"
        fields={["Name", "Price", "Stock"]}
        data={[
          { Name: "Samsung TV", Price: 35000.44, Stock: "Available" },
          { Name: "Mobile", Price: 12000.33, Stock: "Out of Stock" },
        ]}
      />
      <h3>Employees Grid</h3>
      <DataGrid
        caption="Employee Details"
        theme="table-success"
        fields={["First Name", "Last Name", "Designation", "Salary"]}
        data={[
          {
            "First Name": "Sourav",
            "Last Name": "Kumar",
            Designation: "Developer",
            Salary: 50000.33,
          },
          {
            "First Name": "Milan",
            "Last Name": "Kumar",
            Designation: "Developer",
            Salary: 50000.33,
          },
          {
            "First Name": "Himanshu",
            "Last Name": "Kumar",
            Designation: "Developer",
            Salary: 50000.33,
          },
          {
            "First Name": "Kanha",
            "Last Name": "Kumar",
            Designation: "Developer",
            Salary: 50000.33,
          },
        ]}
      />
    </div>
  );
}
