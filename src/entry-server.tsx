import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import { StaticRouter } from "react-router-dom/server";
interface IRenderProps {
  path: string;
}

export function render({ path }: IRenderProps) {
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </Provider>
  );
  return { html };
}
