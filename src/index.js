import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

// REDUX
import { Provider } from "react-redux";
import store from "./redux/rootReducer";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);