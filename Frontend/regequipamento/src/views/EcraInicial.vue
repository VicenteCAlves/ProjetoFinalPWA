<template>
  <div class="ecrainicial">
    <b-button-toolbar key-nav aria-label ="Toolbar with button groups"  class="justify-content-center">
        <router-link to="/ecraequipamentos"><b-button>Equipamento</b-button></router-link>
        <router-link to="/ecraemprestimos"><b-button>Empréstimos</b-button></router-link>
        <router-link to="/ecrautilizadores"><b-button>Utilizadores</b-button></router-link>
        <router-link to="/ecramarcas"><b-button>Marcas</b-button></router-link>
        <router-link to="/ecratipos"><b-button>Tipos</b-button></router-link>
    </b-button-toolbar>
    <Principal />
  </div>
</template>

<script>
  // @ is an alias to /src
  //import HelloWorld from '@/components/HelloWorld.vue'
  //import HelloWorld from '@/components/Teste.vue'
  
  import Principal  from '@/components/Principal.vue'

  export default {
    name: 'EcraInicial',
    components: {
      Principal
    }
  }
</script>
<style>
  .ecrainicial {
    margin:auto;

  }

</style>
