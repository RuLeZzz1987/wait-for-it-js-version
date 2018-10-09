'use strict';

const PORT = 8001;
const http = require('http');
const server = http.createServer((req, res) => {
  res.end({res: 'bar'});
});
server.listen(PORT, () => console.log('Server listening', PORT));
