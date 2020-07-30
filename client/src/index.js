import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode> 
    <Auth0Provider
    domain="dev-zyox3zqn.us.auth0.com"
    clientId="BnFVT4p5d2Sfy12SRUoQRqS0JNqzuWe4"
    redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);



