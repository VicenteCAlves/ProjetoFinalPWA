<template>
    <div class="container">
        <h3>Adiciona Utilizadores</h3>
        <!--<router-link to="/ecraequipamentos"><b-button>Adicionar</b-button></router-link>
        <router-link to="/ecrainicial"><b-button>Ecrã Principal</b-button></router-link>-->
        <form @submit.prevent="adiciona">
            <table>
                <tr>
                    <th>Nome Completo</th><td> <input 
                                        v-model="nomeCompleto"
                                        type="text"
                                        placeholder="Nome completo do utilizador"
                                        required
                                        /> 
                                </td>
                </tr>
                <tr>
                    <th>Nome Utilizador</th><td> <input 
                                        v-model="nomeUtilizador"
                                        type="text"
                                        placeholder="Nome do Utilizador"
                                        required
                                        /> 
                                </td>
                </tr>
                <tr>
                    <th>Email</th><td> <input 
                                        v-model="email"
                                        type="email"
                                        placeholder="nome@algures.com"
                                        
                                        /> 
                                </td>
                </tr>
                <tr>
                    <th>Senha</th><td> <input 
                                        v-model="senha"
                                        type="password"
                                        placeholder="Senha"
                                        
                                        /> 
                                </td>
                </tr>
            </table>
            <b-button type="submit" variant="success">ADICIONAR</b-button>
            <router-link to="/ecrautilizadores"><b-button variant="danger">Voltar</b-button></router-link>
        </form>
    </div>
</template>


<script>
    //import axios from 'axios';  
    //import baseURL from '../config/var';
    
    export default {
        name: 'AdicionaUtilizadores',
        data: () => {
            return {
                nomeCompleto: "",
                nomeUtilizador: "",
                email: "",
                senha: "",
            };
        },
        created: function() {
        },
        methods: {
            adiciona(){
                /*axios
                .post( baseURL.baseURL + '/equipamento', this.$data );*/
                /*.then( res => {
                    this.equipamentos = res.data;
                })
                .catch ( e => {
                    this.erros.push( e );
                })*/
                alert(this.$data.nomeCompleto);
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