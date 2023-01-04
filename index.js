const JS = require('json-server');
const server = JS.create();
const router = JS.router('./db.json');
const middle = JS.defaults();


server.use(middle)
server.use(router)


server.listen(8080)
