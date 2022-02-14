const rotaTipos = require('express').Router();
const controloTipos = require('../controller/controloTipos');

// Rota para pedido GET
rotaTipos.get('/', controloTipos.lista );

// Rota para pedido GET para ID
rotaTipos.get('/:id', controloTipos.lista );

// Rota para pedido POST
rotaTipos.post('/', controloTipos.adiciona );

// Rota para pedido PUT
rotaTipos.put('/:id', controloTipos.modifica );

// Rota para pedido DELETE
rotaTipos.delete('/:id', controloTipos.elimina );

module.exports = rotaTipos;