const Tipo = require('../model/modeloTipos');

// Lista todos os tipos da coleção
exports.lista = function (req, res){
    Tipo.find( req.body ).then ( function( tipo ) {
        res.status( 200 ).send( tipo );
    });
};

// Lista todos os tipos da coleção
exports.listaID = function (req, res){
    Tipo.find( { _id: req.params.id } ).then ( function( tipo ) {
        res.status( 200 ).send( tipo );
    });
};

// Adiciona tipo
exports.adiciona = function (req, res){
    Tipo.create( req.body ).then( function( tipo ) {
        res.status( 201 ).send( tipo );
    });
};


// Modifica tipo
exports.modifica = function (req, res){
    Tipo.findOneAndUpdate( { _id: req.params.id }, req.body ).then( function(tipo){
        res.status(200).send( tipo );
    });
};

// Elimina tipo
exports.elimina = function (req, res){
    Tipo.findOneAndRemove( { _id: req.params.id }, req.body ).then( function(tipo){
        res.status(200).send( tipo );
    });
};