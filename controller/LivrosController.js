var connectionFactory = require('./../infra/connectFactory')
var LivrosDao = require('../dao/LivrosDao')

class LivrosController {
    getAll(req, res) {
        const connection = connectionFactory();
        const livrosDao = new LivrosDao(connection)
        livrosDao.getAllLivros((error, results, fields) => {
            res.render('produtos/lista', { 'livros': results })
        });
        connection.end()
    }
    save(req, res) {
        const livros = req.body;
        const connection = connectionFactory();
        const livrosDao = new LivrosDao(connection);
        livrosDao.save(livros, () => {
            res.redirect('/produtos')
        })
        connection.end()
    }
    show(req, res) {
        res.render('produtos/form')
    }
}
module.exports = new LivrosController();