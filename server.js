const http = require('node:http');

const server = http.createServer((req, res) => {
  console.log('Request started');
  setTimeout(() => {
    res.end('Request completed!\n');
    console.log('Request finished');
  }, 8000);
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

function shutdown() {
  console.log('Shutting down...');
  server.close(() => {
    console.log('All requests finished. Server stopped.');
  });
}

process.once('SIGINT', shutdown);
process.once('SIGTERM', shutdown);
