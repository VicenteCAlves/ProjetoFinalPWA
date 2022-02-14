<template>
    <div class="container">
        <h3>Tipos</h3>
        <router-link to="/formtipos"><b-button variant="info">Adicionar</b-button></router-link>
        <router-link to="/ecrainicial"><b-button variant="warning">Ecrã Principal</b-button></router-link>
        <table class = "table">
            <thead>
                <tr>
                    <!--<th scope = "col">ID</th>-->
                    <th scope = "col">Tipo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tipo in tipos" v-bind:key="tipo._id">
                    <!--<td>{{tipo._id}}</td>-->
                    <td>{{tipo.tipo}}</td>
                    <td><b-button v-on:click="editar( tipo._id )"><b-icon icon="pencil-fill" aria-hidden="true" ></b-icon></b-button></td>
                    <td><b-button v-on:click="eliminar( tipo._id )" ><b-icon icon="trash-fill" aria-hidden="true" /></b-button></td>
                </tr>
            </tbody>
        </table>

    </div>
</template>


<script>
    import axios from 'axios';  
    import baseURL from '../config/var';
    
    export default {
        name: 'Tipos',
        data() {
            return {
 
                tipos: []
            };
        },
        created: function() {
            axios
                .get( baseURL.baseURL + '/tipo')
                .then( res => {
                    this.tipos = res.data;
                })
                .catch ( e => {
                    this.erros.push( e );
                })
        },
        methods: {

           async eliminar( id ){
               await axios
                    .delete( baseURL.baseURL + '/tipo/' + id)
                    .then( async () => {
                    await axios
                        .get( baseURL.baseURL + '/tipo')
                        .then( res => {
                            this.tipos = res.data;
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