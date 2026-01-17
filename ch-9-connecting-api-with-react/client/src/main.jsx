import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './main.css';
import './Product.css';
import App from './App';
import AddProduct from './AddProduct.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <AddProduct /> */}
  </React.StrictMode>
);
