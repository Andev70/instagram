import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
const queryClient = new QueryClient();

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
