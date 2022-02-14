const rotaEquipamentos = require('express').Router();
const controloEquipamentos = require('../controller/controloEquipamentos');

// Rota para pedido GET
rotaEquipamentos.get('/', controloEquipamentos.lista );

// Rota para pedido GET por ID
rotaEquipamentos.get('/:id', controloEquipamentos.listaID );

// Rota para pedido POST
rotaEquipamentos.post('/', controloEquipamentos.adiciona );

// Rota para pedido PUT
rotaEquipamentos.put('/:id', controloEquipamentos.modifica );

// Rota para pedido DELETE
rotaEquipamentos.delete('/:id', controloEquipamentos.elimina );

module.exports = rotaEquipamentos;