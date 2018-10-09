'use strict';

const PORT = 8002;
const TIMEOUT = 10000;
const http = require('http');
const server = http.createServer((req, res) => {
  res.end({res: 'foo'});
});

setTimeout(() => {
  console.log('Foo server initialized');
  server.listen(PORT, () => console.log('Server listening', PORT))
}, TIMEOUT);