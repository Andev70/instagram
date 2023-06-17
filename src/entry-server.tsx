import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import { StaticRouter } from "react-router-dom/server";
import { CookiesProvider } from "react-cookie";

interface IRenderProps {
  path: string;
}

export function render(req, res) {
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <CookiesProvider cookies={req.universalCookies}>
          <App />
        </CookiesProvider>
      </StaticRouter>
    </Provider>
  );
  return { html };
}
