<template>
    <div class="container">
        {{equipamentos}}
    </div>
</template>


<script>
    import axios from 'axios';  
    import baseURL from '../config/var';
    
    export default {
        name: 'Teste',
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
        }
  }
</script>

<style>
    h3 {
        margin-bottom: 5%;
    }
</style>