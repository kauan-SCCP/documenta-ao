
const jwt = require('../services/autorizacao-service');
const UsuarioService = require('../services/usuario-service');

class UsuarioController {

    async registrar(req, res) {

        const email = req.body.email;
        const senha = req.body.senha;

        try {
            const NovoUsuario = await UsuarioService.CriarUsuario(email, senha);
            res.status(201).json(NovoUsuario);
        }
        catch {
            console.error('Erro ao criar usuario:', error);
            res.status(500).json({ error: 'Ocorreu um erro durante a criação do usuario.' });
        }
    }

    async login(req, res) {
        
        const email = req.body.email;
        const senha = req.body.senha;

        if (await UsuarioService.ValidarUsuario(email, senha)) {
            const token = jwt.gerarToken(email);
            return res.status(200).send({'acess_token' : token});
        }

        return res.sendStatus(403);
    }


}

module.exports = new UsuarioController();   