const mongoose = require('mongoose');
const esquema = mongoose.Schema;

// Esquema da coleção de Equipamentos
const esquemaEquipamentos = new esquema({
    idTipo: {
        type: String,
        required: [false,'Este campo é obrigatório!']
    },
    idMarca: {
        type: String,
        required: [false,'Este campo é obrigatório!']
    },
    modelo: {
        type: String,
        required: [true,'Este campo é obrigatório!']
    },
    numeroSerie: {
        type: String,
        required: [true,'Este campo é obrigatório!']
    },
    enderecoFisico: {
        type: String,
        required: [true,'Este campo é obrigatório!']
    },
    enderecoIP: {
        type: String,
        required: [true,'Este campo é obrigatório!']
    },
    dataAquisicao: {
        type: String,
        required: [true,'Este campo é obrigatório!']
    },
    dataGarantia: { 
        type: String,
        required: [true,'Este campo é obrigatório!']
    }
});

// Cria modelo Equipamento basedo no esquemaEquipamentos
const Equipamento = mongoose.model('Equipamentos', esquemaEquipamentos );

module.exports = Equipamento;