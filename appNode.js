const http = require('http');
const url = require('url');
const querystring = require('querystring');
const { error } = require('console');
const weatherApp = require('./src/weatherApp');
const port = 3005;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const parseUrl = url.parse(req.url);
  const parseQuery = querystring.parse(parseUrl.query);

  if (!parseQuery.address) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'Must enter the address' }));
    return;
  }

  console.log(parseQuery.address);
  weatherApp(parseQuery.address)
    .then((data) => {
      res.statusCode = 200;
      res.end(JSON.stringify(data));
    })
    .catch((error) => {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: 'Error when fetching the data' }));
    });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
