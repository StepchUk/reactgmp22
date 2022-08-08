import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import App from '../src/Test';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const jsx = ReactDOMServer.renderToString(<App />);

  const clientBundleScript = '<script src="http://localhost:8080/scripts/bundle.js"></script>';
  const clientBundleStyle = '<link rel="stylesheet" href="http://localhost:8080/styles/bundle.css">';

  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SSR app</title>
    ${clientBundleStyle}
  </head>
  <body>
    <div id='root'>${jsx}</div>
    ${clientBundleScript}
  </body>
  </html>`);
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
