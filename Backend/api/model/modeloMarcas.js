const mongoose = require('mongoose');
const esquema = mongoose.Schema;

// Esquema da coleção de Marcas
const esquemaMarcas = new esquema({
    marca: {
        type: String,
        required: [true,'Este campo é obrigatório!']
    }
});

// Cria modelo Marca basedo no esquemaMarcas
const Marca = mongoose.model('Marcas', esquemaMarcas );

module.exports = Marca;