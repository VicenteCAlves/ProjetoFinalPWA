const mongoose = require('mongoose');
const esquema = mongoose.Schema;

// Esquema da coleção de Tipos
const esquemaTipos = new esquema({
    tipo: {
        type: String,
        required: [true,'Este campo é obrigatório!']
    }
});

// Cria modelo Tipo basedo no esquemaTipos
const Tipo = mongoose.model('Tipos', esquemaTipos );

module.exports = Tipo;