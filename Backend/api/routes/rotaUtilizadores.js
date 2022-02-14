const rotaUtilizadores = require('express').Router();
const controloUtilizadores = require('../controller/controloUtilizadores');

// Rota para pedido GET
rotaUtilizadores.get('/', controloUtilizadores.lista );

// Rota para pedido GET por ID
rotaUtilizadores.get('/:id', controloUtilizadores.listaID );

// Rota para pedido POST
rotaUtilizadores.post('/', controloUtilizadores.adiciona );

// Rota para pedido POST para registo de utilizador
rotaUtilizadores.post('/regista', controloUtilizadores.regista );

// Rota para pedido PUT
rotaUtilizadores.put('/:id', controloUtilizadores.modifica );

// Rota para pedido DELETE
rotaUtilizadores.delete('/:id', controloUtilizadores.elimina );

module.exports = rotaUtilizadores;