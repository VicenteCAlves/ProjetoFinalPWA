const Emprestimo = require('../model/modeloEmprestimos');

// Lista todos de todos os empréstimos da coleção
exports.lista = function (req, res){
    Emprestimo.find( req.body ).then ( function( emprestimo ) {
        res.status( 200 ).send( emprestimo );
    });
}

// Lista o empréstimos da coleção com o ID 
exports.listaID = function (req, res){
    Emprestimo.find( { _id: req.params.id } ).then ( function( emprestimo ) {
        res.status( 200 ).send( emprestimo );
    });
}

// Adiciona empréstimo
exports.adiciona = function (req, res){
    Emprestimo.create( req.body ).then( function( emprestimo ) {
        res.status( 201 ).send( emprestimo );
    });
}

// Modifica empréstimo
exports.modifica = function (req, res){
    Emprestimo.findOneAndUpdate({ _id: req.params.id }, req.body ).then( function( emprestimo ){
        res.status( 200 ).send( emprestimo );
    });
}

// Elimina empréstimo
exports.elimina = function (req, res){
    Emprestimo.findOneAndRemove( { _id: req.params.id } , req.body ).then( function(emprestimo){
        res.status(200).send( emprestimo );
    });
}