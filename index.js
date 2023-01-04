const JS = require('json-server');
const router = JS.router('./db.json')
const server = JS.create();
const middle = JS.defaults([
    {
        readOnly:false
    }
]);

server.use(middle)
server.use(router)


server.listen(8080)
