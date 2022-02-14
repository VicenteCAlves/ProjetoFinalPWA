// Importar modelo do Utilizador
const Utilizador = require('../model/modeloUtilizadores');
const bcrypt = require('bcrypt');
const chave_secreta = require('../../config/db').chave_secreta;

// Lista todos os utilizadores da coleção
exports.lista = function (req, res){
     Utilizador.find( req.body ).then ( function( utilizador ) {
        res.status( 200 ).send( utilizador );
    });
};

// Lista utilizador com o nomeUtilizador
exports.listaID = function (req, res){
    Utilizador.find( { _id: req.params.id } ).then ( function( utilizador ) {
        res.status( 200 ).send( utilizador );
    });
};

// Adiciona Utilizador
exports.adiciona = async function (req, res){
    //var utilizador = req.body;
    req.body.senha = await bcrypt.hash( req.body.senha, 8);
    Utilizador.create( req.body ).then( function( utilizador ) {
        res.status( 201 ).send( utilizador );
    });
};

// Regista Utilizador através do ecrã de login
exports.regista = async function( req, res ) {
    let { 
            nomeCompleto,
            nomeUtilizador,
            email,
            senha,
            confirma_senha
        } = req.body;

    // Verifica se as senhas coincidem
    if (senha !== confirma_senha){
        return res.status( 400 ).json({
            success: false,
            msg: "As senhas não coincidem!"
        })
    } else {
        // Verifica se já existe algum utilizador com o mesmo nomeUtilizador
        Utilizador.findOne({
            nomeUtilizador: nomeUtilizador
        }).then ( utiliza => {
            if (utiliza){
                return res.status( 400 ).json({
                    success: false,
                    msg: "O nome de utilizador já existe!"
                });
            }
        });
        // Verifica se já existe algum utilizador com o mesmo email
        Utilizador.findOne({
            email: email
        }).then ( utiliza => {
            if (utiliza){
                return res.status( 400 ).json({
                    success: false,
                    msg: "Já existe um utilizador com o mesmo email!"
                });
            }
        });

        let novoUtilizador = new Utilizador ({
            nomeCompleto,
            nomeUtilizador,
            email,
            senha
        });

        bcrypt.genSalt( 10, (err, salt) => {
            bcrypt.hash( novoUtilizador.senha, salt, ( err, hash ) => {
                if (err) throw err;
                novoUtilizador.senha = hash;
                novoUtilizador.save().then (utiliza => {
                    return res.status( 201 ).json({
                        success: true,
                        msg: "O utilizador ficou registado!"
                    });
                });
            });
        });
    }
}

// Modifica Utilizador
exports.modifica = function (req, res){
    Utilizador.findOneAndUpdate({ _id: req.params.id }, req.body ).then( function(utilizador){
        res.status(200).send( utilizador );
    });

};

// Elimina Utilizador
exports.elimina = function (req, res){
    Utilizador.findOneAndRemove({ _id: req.params.id }, req.body ).then( function(utilizador){
        res.status(200).send( utilizador );
    });

};