
//var LivrosDao = require('../dao/LivrosDao')

function rotas(server) {
    //sempre irá iniciar antes de qualquer rota (middle) - rota de log
    server.use((req, res, next) => {
        console.log(req.url)
        next()
    })

    server.get('/', (req, res) => {
        console.log('Recebeu requisição');
        res.render('index', { texto: 'Teste Render EJS' });
    });

    server.use((req, res) => {
        res.send('<h1>Essa pagina não existe</h1>')
    })
}
module.exports = rotas;