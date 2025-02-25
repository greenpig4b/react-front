import { configureStore } from "@reduxjs/toolkit";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reducer from "./store";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: reducer,
});
root.render(
   <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
  </Provider>
);