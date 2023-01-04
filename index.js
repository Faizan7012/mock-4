const JS = require('json-server');
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const server = JS.create();
const middle = JS.defaults();


server.use(middle)
server.use(router)


server.listen(8080)
