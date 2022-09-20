import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './JS/App';
import { BrowserRouter } from 'react-router-dom'
import { BasketProvider } from "./BasketContext"
import { DataProvider } from "./DataContext"
import {PayPalScriptProvider} from "@paypal/react-paypal-js"
import {AuthProvider} from "./AuthContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthProvider>
  <PayPalScriptProvider options={{"client-id":"AUSCUp6z7QSaZiCb8xSfe41ZGoXe4eV4O83zbw0FK0ewBdYGx-MignQeWQWsQyGBqs86inH5Bw8WQmO7&currency=PLN"}}>
    <BasketProvider>
      <DataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DataProvider>
    </BasketProvider>
    </PayPalScriptProvider>
    </AuthProvider>
  
);



//</React.StrictMode><React.StrictMode>