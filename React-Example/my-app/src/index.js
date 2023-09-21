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
import { PracticeBinding } from "./practice/practice";
import { Flipkart } from "./flipkartApi/flipkart";
import { UseEffect } from "./useeffect/useeffect";
import { Nasa } from "./NasaAPI/nasa";
import { Shopping } from "./fakestoreapi/fakestoreapi";
import { StyleBinding } from "./validation/style-binding";
import { ClassBinding } from "./class-binding/classbinding";
import { EventBinding } from "./event/event-binding";
import { MouseDemoo } from "./event/event2-binding";
import { MouseDemo } from "./mouse-move/mouse-demo";
import { KeyDemo } from "./Key-binding/key-demo";
import { ButtonDemo } from "./button-event/button-demo";
import { ElementState } from "./element-event/element";
import { ElementStatee } from "./clipboard-event/clipboard-event";
import { ElementStateee } from "./timer-event/timer-event";
import { TouchDemo } from "./touch-event/touch-event";
import { PropsDemo } from "./navbar/props-demo";
import { PropsDemos } from "./datagrid/props-demo";
import { RenderDemo } from "./conditional-rendering/conditional-rendering";
import { FormDemo } from "./React-Form/form-demo";
import { FormDemo2 } from "./React-Form/form-demo2";
import { FormDemo3 } from "./Form-validation/form-demo";
import { FormikDemo } from "./Formik/formik";
import { FormikValidation } from "./Formik/formmik-validation";
import { FormikValidation2 } from "./Formik/Formik-Validation2";
import { FormikValidation3 } from "./Formik/formik-validition3";
import { FormikValidation4 } from "./Formik/Formik-Validation4";
import { FormikValidation5 } from "./Formik/Formik-Validation5";
import { RenderDemo2 } from "./conditional-rendering/conditional-rendering2";
import { Renderdemo3 } from "./conditional-rendering/conditional-rendering3";
import { RenderDemo4 } from "./conditional-rendering/conditional-rendering5";
import { RenderDemo6 } from "./conditional-rendering/conditional-rendering6";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RenderDemo6/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
