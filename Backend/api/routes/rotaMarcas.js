const rotaMarcas = require('express').Router();
const controloMarcas = require('../controller/controloMarcas');

// Rota para pedido GET
rotaMarcas.get('/', controloMarcas.lista );

// Rota para pedido GET
rotaMarcas.get('/:id', controloMarcas.listaID );

// Rota para pedido POST
rotaMarcas.post('/', controloMarcas.adiciona );

// Rota para pedido POST
rotaMarcas.put('/:id', controloMarcas.modifica );

// Rota para pedido DELETE
rotaMarcas.delete('/:id', controloMarcas.elimina );

module.exports = rotaMarcas;