const JS = require('json-server');
const router = JS.router('./db.json')
const server = JS.create();
const middle = JS.defaults();

server.use(JS.rewriter())
server.use(middle)
server.use(router)


server.listen(8080)
