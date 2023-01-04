const JS = require('json-server');
let db = require('./db.json')
const router = JS.router(db)
const server = JS.create();
const middle = JS.defaults();

server.use(middle)
server.use(router)


server.listen(8080,()=>{
    console.log('listening on http://localhost:8080')
})
