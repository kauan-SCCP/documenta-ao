const jwt = require('jsonwebtoken');
const ChaveSecreta = 'atividade2';

class AutorizacaoService {
    
     gerarToken(email) {
        return jwt.sign({sub: email}, ChaveSecreta);
    }

    validarToken(token){
        return jwt.verify(token, ChaveSecreta);
    }

}

module.exports = new AutorizacaoService();