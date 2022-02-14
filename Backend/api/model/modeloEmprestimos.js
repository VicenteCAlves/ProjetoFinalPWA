const mongoose = require('mongoose');
const esquema = mongoose.Schema;

// Esquema da coleção de Emprestimos
const esquemaEmprestimos = new esquema({
	idTipo: {
        type: String,
        required: [true,'Este campo é obrigatório!']
    },
    idMarca: {
        type: String,
        required: [true,'Este campo é obrigatório!']
    },
    modelo: {
        type: String,
        required: [true,'Este campo é obrigatório!']
    },
    numeroSerie: {
        type: String,
        required: [true,'Este campo é obrigatório!']
    },
    nomeUtilizador: {
        type: String,
        required: [true,'Este campo é obrigatório!']
    },
    dataEmprestimo: {
        type: String,
        required: [true,'Este campo é obrigatório!']
    },
    dataDevolucao: {
        type: String,
        required: [false,'Este campo não é obrigatório!']
    },
    dataDevolveu: {
        type: Date,
        required: [false,'Este campo não é obrigatório!']
    }
});

// Cria modelo Emprestimo basedo no esquemaEmprestimos
const Emprestimo = mongoose.model('Emprestimos', esquemaEmprestimos );

module.exports = Emprestimo;