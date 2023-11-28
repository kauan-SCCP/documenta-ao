const ProdutoService = require('../services/produto-service');

class ProdutoController {

    async CriarProduto(req, res) {
        const produto = req.body.produto;
        const descricao = req.body.descricao;
        const preco = req.body.preco;

        try {
            const NovoProduto = await ProdutoService.CriarProduto(produto, descricao, preco);
            res.status(201).json(NovoProduto);
        }
        catch {
            console.error('Erro ao criar produto:', error);
            res.status(500).json({ error: 'Ocorreu um erro durante a criação do produto.' });
        }
    }

    async BuscarProduto(req, res) {
        const id = req.params.id;
        let Produto;
        try {

            Produto = await ProdutoService.GetProdutoByID(id);

        }
        catch {
            console.error('Erro ao buscar produto:', error);
            res.status(500).json({ error: 'Ocorreu um erro durante a busca do produto.' });
        }

        return res.send(Produto);
    }

}

module.exports = new ProdutoController();