import React from 'react';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Store from './Services/Store/MoviesStore';
import App from './App';
import './index.css';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
