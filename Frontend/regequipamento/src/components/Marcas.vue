<template>
    <div class="container">
        <h3>Marcas</h3>
        <router-link to="/formmarcas"><b-button variant="info">Adicionar</b-button></router-link>
        <router-link to="/ecrainicial"><b-button variant="warning">Ecrã Principal</b-button></router-link>
        <table class = "table">
            <thead>
                <tr>
                    <!--<th scope = "col">ID</th>-->
                    <th scope = "col">Marca</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="marca in marcas" v-bind:key="marca._id">
                    <!--<td>{{marca._id}}</td>-->
                    <td>{{marca.marca}}</td>
                    <td><b-button v-on:click="editar( marca._id )"><b-icon icon="pencil-fill" aria-hidden="true" ></b-icon></b-button></td>
                    <td><b-button  v-on:click="eliminar( marca._id )"><b-icon icon="trash-fill" aria-hidden="true" /></b-button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    import axios from 'axios';  
    import baseURL from '../config/var';
    
    export default {
        name: 'Marcas',
        data() {
            return {
                marcas: []
            };
        },
        created: async function () {
            await axios
                .get( baseURL.baseURL + '/marca')
                .then( res => {
                    this.marcas = res.data;
                })
                .catch ( e => {
                    this.erros.push( e );
                })
        },
        methods: {
           async eliminar( id ){
               await axios
                    .delete( baseURL.baseURL + '/marca/' + id)
                    .then( async () => {
                    await axios
                        .get( baseURL.baseURL + '/marca')
                        .then( res => {
                            this.marcas = res.data;
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