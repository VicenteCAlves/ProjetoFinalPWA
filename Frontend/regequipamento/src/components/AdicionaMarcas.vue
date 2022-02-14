<template>
    <div class="container">
        <h3>Adiciona Marcas de Fabricantes</h3>
        <!--<router-link to="/ecraequipamentos"><b-button>Adicionar</b-button></router-link>
        <router-link to="/ecrainicial"><b-button>Ecrã Principal</b-button></router-link>-->
        <form @submit.prevent="adiciona">
            <table>
                <tr>
                    <th>Marca</th><td> <input 
                                        v-model="marca"
                                        type="text"
                                        placeholder="Marca"
                                        required
                                        /> 
                                </td>
                </tr>
            </table>
            <b-button type="submit" variant="success">ADICIONAR</b-button>
            <router-link to="/ecramarcas"><b-button variant="danger">Voltar</b-button></router-link>
        </form>
    </div>
</template>


<script>
    import axios from 'axios';
    import baseURL from '../config/var';
    
    export default {
        name: 'AdicionaMarca',
        data: () => {
            return {
                marca: "",
            };
        },
        created: function() {
        },
        methods: {
            adiciona(){
                axios
                .post( baseURL.baseURL + '/marca', this.$data );

                alert(this.$data.marca);
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