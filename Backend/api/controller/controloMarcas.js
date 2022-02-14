const Marca = require('../model/modeloMarcas');

// Lista todos os marcas da coleção
exports.lista = function (req, res){
    Marca.find( req.body ).then ( function( marca ) {
        res.status( 200 ).send( marca );
    });
};

// Lista todos os marcas da coleção
exports.listaID = function (req, res){
    Marca.find( { _id: req.body.params.id } ).then ( function( marca ) {
        res.status( 200 ).send( marca );
    });
};

// Adiciona marca
exports.adiciona = function (req, res){
    Marca.create( req.body ).then( function( marca ) {
        res.status( 201 ).send( marca );
    });
};

// Modifica marca
exports.modifica = function (req, res){
    Marca.findOneAndUpdate( { _id: req.params.id } , req.body ).then( function(equipamento){
        res.status(200).send( equipamento );
    });
};

// Elimina marca
exports.elimina = function (req, res){
    Marca.findOneAndRemove( { _id: req.params.id }, req.body ).then( function(equipamento){
        res.status(200).send( equipamento );
    });
};