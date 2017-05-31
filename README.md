React Bootstrap with server side rendering STARTER
==========
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](https://github.com/MacKentoch/react-bootstrap-webpack-starter)
[![Build Status](https://travis-ci.org/MacKentoch/react-bootstrap-webpack-ssr-starter.svg?branch=master)](https://travis-ci.org/MacKentoch/react-bootstrap-webpack-ssr-starter)
[![Coverage Status](https://coveralls.io/repos/github/MacKentoch/react-bootstrap-webpack-ssr-starter/badge.svg?branch=master)](https://coveralls.io/github/MacKentoch/react-bootstrap-webpack-ssr-starter?branch=master)

### ReactJS + Bootstrap starter + react router v4 + webpack 2 with server side rendering (and hot reload for front dev)

## Concept behind

This is a port of existing starter [react-bootstrap-webpack-starter](https://github.com/MacKentoch/react-bootstrap-webpack-starter) where I added `server side rendering`.

## Detailed Content

**Front:**
- React JS (15.5.x - [github :link:](https://github.com/facebook/react))
- react-router (v4- [github :link:](https://github.com/reactjs/react-router))
- Bootstrap (3.x - [github :link:](https://github.com/twbs/bootstrap))
- React-Bootstrap ([github :link:](https://github.com/react-bootstrap/react-bootstrap))
- font-awesome ([github :link:](https://github.com/FortAwesome/Font-Awesome))
- animate.css ([github :link:](https://github.com/daneden/animate.css))
- classnames ([github :link:](https://github.com/JedWatson/classnames))
- react-motion ([github :link:](https://github.com/chenglou/react-motion))
- Webpack 2.x ([github :link:](https://github.com/webpack/webpack))
- babel 6+ ([github :link:](https://github.com/babel/babel))
- axios ([github :link:](https://github.com/mzabriskie/axios) *Why: simple, complete, isomorphic ...*)

**Tool chain:**
- babel 6+
- eslint
- webpack 2.x
- hot reload
- loaders
  - `js` / `jsx`
  - sass
  - css
  - json
  - images formats
  - svg and fonts formats
- postcss (postcss-next)

**tests:**
- Mocha
- Chai (*+ dirty-chai*)
- enzyme
- Sinon
- nyc


## Usage

### Install

```bash
npm install
```

Or yarn way:

```bash
yarn install
```
### bundle dev mode

```bash
npm run dev
```

### dev : hot reload mode

```bash
npm run start
```

### tests

```bash
npm run test
```

### bundle production mode


```bash
npm run prod
```

### serve single page application

```bash
npm run serve-spa
```
 Note: it is the same as `npm run serve` but it automatically run a prod bundle before starting server

### serve server side rendering

```bash
npm run serve-ssr
```

## License

The MIT License (MIT)

Copyright (c) 2017 Erwan DATIN

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
