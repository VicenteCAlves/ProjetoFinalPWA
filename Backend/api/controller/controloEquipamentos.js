const Equipamento = require('../model/modeloEquipamentos');

// Lista todos os equipamentos da coleção
exports.lista = function (req, res){
    Equipamento.find( req.body ).then ( function( equipamento ) {
        res.status( 200 ).send( equipamento );
    });
}

// Lista todos os equipamentos da coleção
exports.listaID = function (req, res){
    Equipamento.find( { _id: req.params.id } ).then ( function( equipamento ) {
        res.status( 200 ).send( equipamento );
    });
}

// Adiciona equipamento
exports.adiciona = function (req, res){
    Equipamento.create( req.body ).then( function( equipamento ) {
        res.status( 201 ).send( equipamento );
    });
}

// Modifica equipamento
exports.modifica = function (req, res){
    Equipamento.findOneAndUpdate({ _id: req.params.id }, req.body ).then( function( equipamento ){
        res.status( 200 ).send( equipamento );
    });
}

// Elimina equipamento
exports.elimina = function (req, res){
    Equipamento.findOneAndRemove( { _id: req.params.id } , req.body ).then( function(equipamento){
        res.status(200).send( equipamento );
    });
}