const rotaEmprestimos = require('express').Router();
const controloEmprestimos = require('../controller/controloEmprestimos');

// Rota para pedido GET
rotaEmprestimos.get('/', controloEmprestimos.lista );

// Rota para pedido GET por ID
rotaEmprestimos.get('/:id', controloEmprestimos.lista );

// Rota para pedido POST
rotaEmprestimos.post('/', controloEmprestimos.adiciona );

// Rota para pedido PUT
rotaEmprestimos.put('/:id', controloEmprestimos.modifica );

// Rota para pedido DELETE
rotaEmprestimos.delete('/:id', controloEmprestimos.elimina );

module.exports = rotaEmprestimos;