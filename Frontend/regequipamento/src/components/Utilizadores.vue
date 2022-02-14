<template>
    <div class="container">
        <h3>Utilizadores</h3>
        <router-link to="/formutilizadores"><b-button variant="info">Adicionar</b-button></router-link>
        <router-link to="/ecrainicial"><b-button variant="warning">Ecrã Principal</b-button></router-link>
        <table class = "table">
            <thead>
                <tr>
                    <!--<th scope = "col">ID</th>-->
                    <th scope = "col">Nome Completo</th>
                    <th scope = "col">Nome Utilizador</th>
                    <th scope = "col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="utilizador in utilizadores" v-bind:key="utilizador._id">
                    <!--<td>{{utilizador._id}}</td>-->
                    <td>{{utilizador.nomeCompleto}}</td>
                    <td>{{utilizador.nomeUtilizador}}</td>
                    <td>{{utilizador.email}}</td>
                    <td><b-button v-on:click="editar( utilizador._id )"><b-icon icon="pencil-fill" aria-hidden="true" ></b-icon></b-button></td>
                    <td><b-button  v-on:click="eliminar( utilizador._id )" ><b-icon icon="trash-fill" aria-hidden="true" /></b-button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    import axios from 'axios';
    import baseURL from '../config/var';
    
    export default {
        name: 'Utilizadores',
        data() {
            return {
                utilizadores: []
            };
        },
        created: function() {
            axios
                .get( baseURL.baseURL + '/utilizador')
                .then( res => {
                    this.utilizadores = res.data;
                })
                .catch ( e => {
                    this.erros.push( e );
                })
        },
        methods: {
            async eliminar( id ){
               await axios
                    .delete( baseURL.baseURL + '/utilizador/' + id)
                    .then( async () => {
                    await axios
                        .get( baseURL.baseURL + '/utilizador')
                        .then( res => {
                            this.utilizadores = res.data;
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
</style>