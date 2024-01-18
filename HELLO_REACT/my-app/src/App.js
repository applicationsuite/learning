import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import { Login } from "./login/login";
import { Register } from "./register/register";
import { Search } from "./search/search";
import { Home } from "./home/home";
import { Products } from "./products/products";
import { Details } from "./details/details";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header className="text-center p-2 bg-dark text-white">
          <span className="h3">
            <span className="bi bi-cart3"></span> Shopping Online
          </span>
        </header>
        <section className="mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products/:category" element={<Products />} />
            <Route path="details/:id" element={<Details />} />
            <Route
              path="*"
              element={
                <>
                  <code>Path you requested : Not Found</code>
                </>
              }
            />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
