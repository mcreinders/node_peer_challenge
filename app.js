/**
 * Created by user on 1/5/16.
 */
var http = require('http');
var callmodules = require('./callmodules');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write(callmodules.acctBalDisplay());
    response.write(callmodules.randomDollars(100, 1000000));
    response.end();
}).listen(3000);

console.log('Running on port 3000!');