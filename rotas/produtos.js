const connectionFactory = require('./../infra/connectFactory')
const LivrosController = require('./../controller/LivrosController');
const LivrosDao = require('../dao/LivrosDao')

module.exports = (server) => {
    server.get('/produtos', LivrosController.getAll);
    server.post('/produtos', LivrosController.save);
    server.get('/produtos/form', LivrosController.show);

    // server.get('/produtos/form', (req, res) => res.render('produtos/form')); // ex 1
}
