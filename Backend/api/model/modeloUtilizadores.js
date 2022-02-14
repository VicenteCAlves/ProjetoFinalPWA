const mongoose = require('mongoose');
const esquema = mongoose.Schema;

// Esquema da coleção de Utilizadores
const esquemaUtilizadores = new esquema({
    nomeCompleto: {
        type: String,
        required: [true,'Este campo é obrigatório!']
    },
    nomeUtilizador: {
        type: String,
        required: [true,'Este campo é obrigatório!']
    },
    email: {
        type: String,
        required: [true,'Este campo é obrigatório!']
    },
    senha: {
        type: String,
        required: [true,'Este campo é obrigatório!']
    }
});

// Cria modelo Utilizador basedo no esquemaUtilizadores
const Utilizador = mongoose.model('Utilizadores', esquemaUtilizadores );

module.exports = Utilizador;