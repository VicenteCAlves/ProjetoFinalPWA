<template>
    <div class="container">
        <h3>Empréstimos</h3>
        <router-link to="/formemprestimos"><b-button variant="info">Adicionar</b-button></router-link>
        <router-link to="/ecrainicial"><b-button variant="warning">Ecrã Principal</b-button></router-link>
        <table class = "table">
            <thead>
                <tr>
                    <!--<th scope = "col">ID</th>-->
                    <th scope = "col">Tipo</th>
                    <th scope = "col">Marca</th>
                    <th scope = "col">Modelo</th>
                    <th scope = "col">Número Série</th>
                    <th scope = "col">Nome do Utilizador</th>
                    <th scope = "col">Data de Empréstimo</th>
                    <th scope = "col">Data para Devolução</th>
                    <th scope = "col">Data Devolvido</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="emprestimo in emprestimos" v-bind:key="emprestimo._id">
                    <!--<td>{{emprestimo._id}}</td>-->
                    <td>{{emprestimo.idTipo}}</td>
                    <td>{{emprestimo.idMarca}}</td>
                    <td>{{emprestimo.modelo}}</td>
                    <td>{{emprestimo.numeroSerie}}</td>
                    <td>{{emprestimo.nomeUtilizador}}</td>
                    <td>{{emprestimo.dataEmprestimo}}</td>
                    <td>{{emprestimo.dataDevolucao}}</td>
                    <td>{{emprestimo.dataDevolveu}}</td>
                    <td><b-button v-on:click="editar( emprestimo._id )"><b-icon icon="pencil-fill" aria-hidden="true" ></b-icon></b-button></td>
                    <td><b-button  v-on:click="eliminar( emprestimo._id )"><b-icon icon="trash-fill" aria-hidden="true" /></b-button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    import axios from 'axios'; 
    import baseURL from '../config/var' ;
    
    export default {
        name: 'Emprestimos',
        data() {
            return {
                emprestimos: []
            };
        },
        created: function() {
            axios
                .get( baseURL.baseURL + '/emprestimo')
                .then( res => {
                    this.emprestimos = res.data;
                })
                .catch ( e => {
                    this.erros.push( e );
                })
        },
        methods: {
           async eliminar( id ){
               await axios
                    .delete( baseURL.baseURL + '/emprestimo/' + id)
                    .then( async () => {
                    await axios
                        .get( baseURL.baseURL + '/emprestimo')
                        .then( res => {
                            this.emprestimos = res.data;
                        })
                        .catch ( e => {
                            this.erros.push( e );
                        })

                })
                .catch ( e => {
                    this.erros.push( e );
                })
            },
            editar( id ){
                alert("Editar: " + id );
            }
        }
  }
</script>

<style scoped>
    h3 {
        margin-bottom: 5%;
    }
    
    table {
        margin-left: auto;
        margin-right: auto;
    }
</style>