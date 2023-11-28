const ProdutoService = require('../services/produto-service');

class ProdutoController {

    // Cria um novo produto
    // Precisa do produto, descricao e preco
    // Retorna 201 em caso de sucesso
    // Retorna 500 caso de erro
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

    // Busca um produto por id
    // O id deve ser enviado na url
    // Retorna 200 com o produto encontrado (ou vazio se não encontrar)
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
