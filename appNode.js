const http = require('http');
const url = require('url');
const querystring = require('querystring');

const port = 3005;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const parseUrl = url.parse(req.url);
  const parseQuery = parseUrl.query;

  if (parseQuery.address) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'Must enter the address' }));
  }
});
