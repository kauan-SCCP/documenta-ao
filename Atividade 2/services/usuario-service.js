const UsuarioModel = require('../models/usuario-model');

const bcrypt = require('bcrypt');
const saltRounds = 10;

class UsuarioService {

 
    async CriarUsuario(email, senha) {

        const cripto = await bcrypt.hash(senha, saltRounds);

        UsuarioModel.create({email, senha: cripto});

    }

    async ValidarUsuario(email, senha) {

        const usuario = await UsuarioModel.findOne({ 
            where: { email : email }
        });

        return await bcrypt.compare(senha, usuario.senha);
    }

}

module.exports = new UsuarioService();