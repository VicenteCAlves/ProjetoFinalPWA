const express = require('express');
const bodyParser = require('body-parser');
//const res = require('express/lib/response');
const mongoose = require('mongoose');
const cors = require('cors');

// Configurações da Base de Dados
const config = require('./config/db');

// Rotas
const rotaUtilizadores = require('./api/routes/rotaUtilizadores');
const rotaEquipamentos = require('./api/routes/rotaEquipamentos');
const rotaEmprestimos = require('./api/routes/rotaEmprestimos');
const rotaMarcas = require('./api/routes/rotaMarcas');
const rotaTipos = require('./api/routes/rotaTipos');

let PORT = process.env.PORT || 4000;

// Efetua a ligação à Base de Dados
mongoose.connect( config.basedadosExterna )

// Verifica se a ligação foi estabelecida
mongoose.connection.on('connected', () =>{
    console.log('Ligado à base de dados!!!');
});

// Em caso de erro envia para a consola o erro
mongoose.connection.on('error', (erro) => {
    console.log('Erro de ligação à Base de Dados' + erro );
});

// Criar app express
const app = express();

app.use( cors() );

// Analisa solicitações do tipo de conteúdo - application/x-www-form-urlencoded
app.use( bodyParser.urlencoded( { extended: true } ) );

//  Analisa solicitações do tipo de conteúdo - application/json
app.use( bodyParser.json() );

// Definição de rota simples
app.get('/', (req, res) => {
    res.json( {"message": "Bem vindo ao Registo de Equipamento."} );
});

app.use('/utilizador', rotaUtilizadores );

app.use('/equipamento', rotaEquipamentos );

app.use('/emprestimo', rotaEmprestimos );

app.use('/marca', rotaMarcas);

app.use('/tipo', rotaTipos );

// fica à escusta por pedidos
app.listen( PORT, () => {
    console.log(`O servidor está à escuta na porta ${ PORT }!!"`);
});