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
import frontRoutes        from '../../../app/routes/Routes';
import {
  RouterContext,
  match
}                         from 'react-router';

const DOCS_PATH = '../../../../docs';

const app = express();

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

app.set('port', 8083);
app.set('ipAdress', 'localhost');

// $FlowIgnore
// launch server:
app.listen(
  app.get('port'),
  app.get('ipAdress'),
  () => console.log(`Production server 🏃 (running) on ${app.get('ipAdress')}:${app.get('port')}'`)
);

module.exports = app; // export app just for testing purpose


function serverRender(req, res) {
  const routes    = frontRoutes(); 
  const location  = req.url;

  match(
    { routes, location },
    (err, redirectLocation, renderProps) => {
      if (err) {
        console.error(err);
        return res.status(500).end('Internal server error');
      }
      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }
      if (!renderProps) {
        return res.status(404).end('Not found');
      }

      const InitialView = (<RouterContext {...renderProps} />);
      const html        = renderToString(InitialView);

      return res
        .status(200)
        .set('content-type', 'text/html')
        .send(renderFullPage(html));
    }
  );
}

function renderFullPage(html) {
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
        <section id="root">
          ${html}
        </section>
        <script type="text/javascript" src="/assets/app.vendor.bundle.js"></script>
        <script type="text/javascript" src="/assets/app.bundle.js"></script>
      </body>
    </html>
  `
  };
  return indexHtml.template;
}
