var server = require("./config-express")();
var porta = 3001;

server.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
});
