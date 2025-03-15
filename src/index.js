import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Auth0Provider
    domain="dev-yqrl5hukpepbu3ek.us.auth0.com"
    clientId="zwddFePxyO0YmVidwdjegKfcz9EXNMyZ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
