/* eslint no-console:0 */
/* eslint no-process-env:0 */
// @ flow weak

'use strict';

const express     = require('express');
const path        = require('path');
const bodyParser  = require('body-parser');
const helmet      = require('helmet');
// const morgan      = require('morgan');

// isomorphic:
import React              from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter }   from 'react-router';
import App                from '../../../app/containers/app/App';

const DOCS_PATH = '../../../../docs';
const PORT      = 8083;
const IP_ADRESS = 'localhost';

const app       = express();

app.set('port', PORT);
app.set('ipAdress', IP_ADRESS);

app.use(helmet()); // ensure app security
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// if you need logs (note: uncomment line 11 too):
// app.use(morgan('combined'));

app.use('/assets', express.static(path.resolve(__dirname, DOCS_PATH, 'public/assets/')));

// IMPORTANT: '/*' and not '/' 
// since you want browser refresh (= first render) to work from any route of the application
app.get('/*', serverRender);

/** ========================================================
*    error management
======================================================== */
// catch error 404:
app.use(
  (req, res, next) => {
    console.log('req.url: ', req.url);
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  }
);

/* eslint-disable no-unused-vars */
app.use(
  (err, req, res, next) => {
    if (err.status === 404) {
      res.status(404).send('Sorry nothing here for now...');
    }
    console.error(err);
    res.status(500).send('internal server error');
  }
);
/* eslint-enable no-unused-vars */
/* ======================================================= */
// $FlowIgnore
// launch server:
app.listen(
  PORT,
  IP_ADRESS,
  () => console.log(`
    =====================================================
    -> Server (SSR) 🏃 (running) on ${IP_ADRESS}:${PORT}
    =====================================================
  `)
);

module.exports = app; // export app just for testing purpose


function serverRender(req, res) {
  const location  = req.url;
  const context   = {};

  const InitialView = (
    <StaticRouter
      location={location}
      context={context}>
      <App />
    </StaticRouter>
  );

  const html = renderToString(InitialView);
  if (context.url) {
    return res.status.end({ location: context.url });
  }

  return res
    .status(200)
    .set('content-type', 'text/html')
    .send(renderFullPage(html));
}

function renderFullPage(html) {
  // NOTE:
  // <section id="root">
  //   ${html}
  // </section>
  // will throw warning related to: https://stackoverflow.com/questions/34060968/react-warning-render
  //
  // so write this way to fix: 
  // <section id="root">${html}</section> 
  const indexHtml = {
    template: `
    <!DOCTYPE html>
    <html>
      <head>
        <title>react bootstrap universal</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="actAdmin">
        <meta name="author" content="Erwan DATIN">
        <link href="http://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="/assets/app.styles.css">
      </head>
      <body class="skin-black" style="background-color:#f1f2f7">
        <section id="root">${html}</section>
        <script type="text/javascript" src="/assets/app.vendor.bundle.js"></script>
        <script type="text/javascript" src="/assets/app.bundle.js"></script>
      </body>
    </html>
  `
  };
  return indexHtml.template;
}
