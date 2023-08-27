import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { Login } from "./login/login";
import { ShopperIndex } from "./shopper/shopper-index";
import { NetflixIndex } from "./netflix/netflix-index";
import { DataBinding } from "./flipkart/data-binding";
import { DataBindings } from "./flipkart/sourav";
import {PracticeBinding} from "./practice/practice"
import { Flipkart } from "./flipkartApi/flipkart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Flipkart />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 