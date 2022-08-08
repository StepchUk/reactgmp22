import React from 'react';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Store from './Services/Store/MoviesStore';
import App from './App';
import './index.css';
import Test from './Test';

const root = ReactDom.createRoot(document.getElementById('root'));

root.hydrate(
  <React.StrictMode>
    <Test />
    {/* <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider> */}
  </React.StrictMode>,
);
