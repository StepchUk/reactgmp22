import React from 'react';
import { ReactDom } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Services/Store/MoviesStore';
import App from './App';
import './index.css';

const root = ReactDom.hydrateRoot(document.getElementById('root'));

// const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App Router={BrowserRouter} store={store} />
    </Provider>
  </React.StrictMode>,
);
