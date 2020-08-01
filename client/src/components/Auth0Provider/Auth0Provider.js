import React from "react";
import ReactDOM from "react-dom";
import App from "../../App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-zyox3zqn.us.auth0.com"
    clientId="BnFVT4p5d2Sfy12SRUoQRqS0JNqzuWe4"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
