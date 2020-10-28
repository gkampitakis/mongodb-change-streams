const server = require('./server');

server.listen(5000, '0.0.0.0')
  .then(() => console.log('🚀 Server Running'));
