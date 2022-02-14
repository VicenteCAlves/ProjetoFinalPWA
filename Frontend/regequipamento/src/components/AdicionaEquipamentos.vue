<template>
    <div class="container">
        <h3>Adiciona Equipamentos</h3>
        <form @submit.prevent="adiciona">
            <table>
                <tr>
                    <th>Tipo</th><td> 
                                    <select v-model="idTipo">
                                            <option v-for="tipo in tipos" v-bind:key="tipo.tipo">
                                                {{tipo.tipo}}
                                            </option>
                                    </select>
                                </td>
                </tr>
                <tr>
                    <th>Marca</th><td> 
                                    <select v-model="idMarca">
                                            <option v-for="marca in marcas" v-bind:key="marca.marca">
                                                {{marca.marca}}
                                            </option>
                                    </select>
                                </td>
                </tr>
                <tr>
                    <th>Modelo</th><td> <input 
                                        v-model="modelo"
                                        type="text"
                                        placeholder="Modelo"
                                        required
                                        /> 
                                </td>
                </tr>
                <tr>
                    <th>Número Série</th><td> <input 
                                        v-model="numeroSerie"
                                        type="text"
                                        placeholder="Número de Série"
                                        required
                                        /> 
                                </td>
                </tr>
                <tr>
                    <th>Endereço Físico</th><td> <input 
                                        v-model="enderecoFisico"
                                        type="text"
                                        placeholder="AA:AA:AA:AA:AA:AA"
                                        
                                        /> 
                                </td>
                </tr>
                <tr>
                    <th>Endereço IP</th><td> <input 
                                        v-model="enderecoIP"
                                        type="text"
                                        placeholder="192.168.0.0"
                                        
                                        /> 
                                </td>
                </tr>
                <tr>
                    <th>Data de Aquisição</th><td> <input 
                                        v-model="dataAquisicao"
                                        type="text"
                                        placeholder="01/01/2020"
                                        
                                        /> 
                                </td>
                </tr>
                <tr>
                    <th>Data da Garantia</th><td> <input 
                                        v-model="dataGarantia"
                                        type="text"
                                        placeholder="01/01/2020"
                                        
                                        /> 
                                </td>
                </tr>
            </table>
            <b-button type="submit" variant="success" >ADICIONAR</b-button>
            <router-link to="/ecraequipamentos"><b-button variant="danger">Voltar</b-button></router-link>
        </form>
    </div>
</template>


<script>
    import axios from 'axios';
    import baseURL from '../config/var';
    
    export default {
        name: 'AdicionaEquipamentos',
        data: () => {
            return {
                idTipo: "",
                idMarca: "",
                modelo: "",
                numeroSerie: "",
                enderecoFisico: "",
                enderecoIP: "",
                dataAquisicao: "",
                dataGarantia:"",
                tipos : [],
                marcas: []
            };
        },
        created: function() {
            alert("aqui");
            axios
                .get( baseURL.baseURL + '/marca')
                .then( res => {
                    this.marcas = res.data;
                })
                .catch ( e => {
                    this.erros.push( e );
                });
            axios
                .get( baseURL.baseURL + '/tipo')
                .then( res => {
                    this.tipos = res.data;
                })
                .catch ( e => {
                    this.erros.push( e );
                });
        },
        methods: {
            adiciona(){
                axios
                .post( baseURL.baseURL + '/equipamento', this.$data );
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