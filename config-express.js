const consign = require('consign')
var express = require("express")
var bodyParser = require('body-parser')
require('dotenv').config()

module.exports = function () {
    var server = express();

    server.set('view engine', 'ejs');    

    server.use(express.static('public'))  
    server.use(bodyParser.urlencoded({ extended: true }))

    consign()
        .include('./rotas')        
        .into(server)

    return server;
}