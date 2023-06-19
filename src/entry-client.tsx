import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CookiesProvider } from "react-cookie";
const clienter = new QueryClient();
ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <CookiesProvider>
          <QueryClientProvider client={clienter}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          </QueryClientProvider>
        </CookiesProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
