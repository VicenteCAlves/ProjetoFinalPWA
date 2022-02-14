<template>
    <div class="container">
        <h3>Adiciona Empréstimos</h3>
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
                    <th>Nome do Utilizador</th><td> <input 
                                        v-model="nomeUtilizador"
                                        type="text"
                                        placeholder="Nome do Utilizador"
                                        
                                        /> 
                                </td>
                </tr>
                <tr>
                    <th>Data de Empréstimo</th><td> <input 
                                        v-model="dataEmprestimo"
                                        type="date"
                                        placeholder="dd/mm/aaaa"
                                        
                                        /> 
                                </td>
                </tr>
                <tr>
                    <th>Data para Devolução</th><td> <input 
                                        v-model="dataDevolucao"
                                        type="date"
                                        placeholder="dd/mm/aaaa"
                                        
                                        /> 
                                </td>
                </tr>
                <tr>
                    <th>Data Devolveu</th><td> <input 
                                        v-model="dataDevolveu"
                                        type="date"
                                        placeholder="dd/mm/aaaa"
                                        
                                        /> 
                                </td>
                </tr>
            </table>
            <b-button type="submit" variant="success">ADICIONAR</b-button>
            <router-link to="/ecraemprestimos"><b-button variant="danger">Voltar</b-button></router-link>
        </form>
    </div>
</template>


<script>
    import axios from 'axios';  
    import baseURL from '../config/var';
    
    export default {
        name: 'AdicionaEmprestimos',
        data: () => {
            return {
                idTipo: "",
                idMarca: "",
                modelo: "",
                numeroSerie: "",
                nomeUtilizador: "",
                dataEmprestimo: "",
                dataDevolucao: "",
                dataDevolveu:"",
                tipos : [],
                marcas: []
            };
        },
        created: function() {
            //alert("aqui");
            axios
                .get( baseURL.baseURL + '/marca')
                .then( res => {
                    this.marcas = res.data;
                })
                .catch ( e => {
                    this.erros.push( e );
                });
            axios
                .get(  baseURL.baseURL + '/tipo')
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
                .post( baseURL.baseURL + '/emprestimo', this.$data )
                .then( res => {
                    this.emprestimos = res.data;
                })
                .catch ( e => {
                    this.erros.push( e );
                })
                
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