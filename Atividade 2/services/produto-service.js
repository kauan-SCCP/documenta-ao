const ProdutoModule = require('../models/produto-model');

class ProdutoService {

    async CriarProduto(produto, descricao, preco) {
        return ProdutoModule.create({produto, descricao, preco});
    }
    
    async GetProdutoByID(id) {
        return ProdutoModule.findByPk(id);
    }
}

module.exports = new ProdutoService();