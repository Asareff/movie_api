const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
  
    // Log the request URL and timestamp to a "log.txt" file
    const logData = `Request URL: ${pathname} - Timestamp: ${new Date()}\n`;
    fs.appendFile('log.txt', logData, (err) => {
      if (err) {
        console.error(err);
      }
    });
  
    if (pathname === '/documentation.html') {
      fs.readFile('documentation.html', (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Documentation not found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    } else {
      fs.readFile('index.html', (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Page not found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    }
  });
  
  server.listen(8080, () => {
    console.log('Server is running on port 8080');
  });
  
