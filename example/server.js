/* eslint no-console:0 */
const express = require('express');
const path = require('path');

const port = process.env.PORT || 5000;

express()
  .use('/public', express.static(`${__dirname}/public`))
  .get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  })
  .listen(port, () => {
    console.log(`Listening on ${port}`);
  });
