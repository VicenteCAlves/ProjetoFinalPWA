<template>
    <div class="container">
        <h3>Equipamentos</h3>
        <router-link to="/formequipamentos"><b-button variant="info">Adicionar</b-button></router-link>
        <router-link to="/ecrainicial"><b-button variant="warning">Ecrã Principal</b-button></router-link>
        <table class = "table">
            <thead>
                <tr>
                    <!--<th scope = "col">ID</th>-->
                    <th scope = "col">Tipo</th>
                    <th scope = "col">Marca</th>
                    <th scope = "col">Modelo</th>
                    <th scope = "col">Número Série</th>
                    <th scope = "col">Endereço Físico</th>
                    <th scope = "col">Endereço IP</th>
                    <th scope = "col">Data Aquisição</th>
                    <th scope = "col">Data Garantia</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="equipamento in equipamentos" v-bind:key="equipamento._id">
                   <!-- <td>{{equipamento._id}}</td>-->
                    <td>{{equipamento.idTipo}}</td>
                    <td>{{equipamento.idMarca}}</td>
                    <td>{{equipamento.modelo}}</td>
                    <td>{{equipamento.numeroSerie}}</td>
                    <td>{{equipamento.enderecoFisico}}</td>
                    <td>{{equipamento.enderecoIP}}</td>
                    <td>{{equipamento.dataAquisicao}}</td>
                    <td>{{equipamento.dataGarantia}}</td>
                    <td><b-button  v-on:click="editar( equipamento._id )"><b-icon icon="pencil-fill" aria-hidden="true" ></b-icon></b-button></td>
                    <td><b-button  v-on:click="eliminar( equipamento._id )"><b-icon icon="trash-fill" aria-hidden="true" /></b-button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
    import axios from 'axios';
    import baseURL from '../config/var';
    
    export default {
        name: 'Equipamentos',
        data() {
            return {
                equipamentos: []
            };
        },
        created: function() {
            axios
                .get( baseURL.baseURL + '/equipamento')
                .then( res => {
                    this.equipamentos = res.data;
                })
                .catch ( e => {
                    this.erros.push( e );
                })
        },
        methods: {
            async eliminar( id ){
               await axios
                    .delete( baseURL.baseURL + '/equipamento/' + id)
                    .then( async () => {
                    await axios
                        .get( baseURL.baseURL + '/equipamento')
                        .then( res => {
                            this.equipamentos = res.data;
                        })
                        .catch ( e => {
                            this.erros.push( e );
                        })

                })
                .catch ( e => {
                    this.erros.push( e );
                })
            },
            editar(id){
                alert( "Editar: " + id)
            }
        }

  }
</script>

<style scoped>
    h3 {
        margin-bottom: 1%;
    }

    table {
        margin-left: auto;
        margin-right: auto;
    }

</style>