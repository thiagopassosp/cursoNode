class LivrosDao {
    constructor(connection) {
        this.connection = connection;
    }
    getAllLivros(callback) {
        this.connection.query('SELECT * FROM livros', callback);
    }

    save(livro, callback) {
        this.connection.query('INSERT INTO livros SET ?', livro, callback);
    }
}
module.exports = LivrosDao