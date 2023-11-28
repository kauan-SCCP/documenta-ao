const express = require('express');
const UsuarioController = require('./controller/usuario-controller');
const ProdutoController = require('./controller/produto-controller');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/usuario/registrar', async(req, res) => UsuarioController.registrar(req, res));

app.post('/api/login', async(req, res) => UsuarioController.login(req, res));


app.post('/api/CriarProduto', async(req, res) => ProdutoController.CriarProduto(req, res));

app.get('/api/BuscarProduto/:id', async(req, res) => ProdutoController.BuscarProduto(req, res));



app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});