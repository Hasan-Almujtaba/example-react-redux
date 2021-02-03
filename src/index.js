import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navigation from "./components/Navigation";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <Navigation />
      <Home />
    </Provider>
  </Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
