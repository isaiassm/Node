const moduloA = require('../../modulo')
console.log(moduloA.ola)

const http = require('http')
http.createServer((req, res)=>{
    res.write('bom dia')
    res.end()
}).listen(8080)