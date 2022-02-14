<template>
    <div class="container">
        <h3>Adiciona Tipos de Equipamento</h3>
        <!--<router-link to="/ecraequipamentos"><b-button>Adicionar</b-button></router-link>
        <router-link to="/ecrainicial"><b-button>Ecrã Principal</b-button></router-link>-->
        <form @submit.prevent="adiciona">
            <table>
                <tr>
                    <th>Tipo</th><td> <input 
                                        v-model="tipo"
                                        type="text"
                                        placeholder="Tipo"
                                        required
                                        /> 
                                </td>
                </tr>
            </table>
            <b-button type="submit" variant="success" >ADICIONAR</b-button>
            <router-link to="/ecratipos"><b-button variant="danger">Voltar</b-button></router-link>
        </form>
    </div>
</template>


<script>
    import axios from 'axios';
    import baseURL from '../config/var';
    
    export default {
        name: 'AdicionaTipos',
        data: () => {
            return {
                tipo: ""
            };
        },
        created: function() {
        },
        methods: {
            adiciona(){
                axios
                .post( baseURL.baseURL + '/tipo', this.$data );

                alert(this.$data.tipo);
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