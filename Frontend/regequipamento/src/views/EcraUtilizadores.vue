<template>
  <div class="ecrautilizadores">
    <!--<b-button-toolbar key-nav aria-label ="Toolbar with button groups">
        <router-link to="/ecraequipamentos"><b-button>Equipamento</b-button></router-link>
        <router-link to="/ecraemprestimos"><b-button>Empréstimos</b-button></router-link>
        <router-link to="/ecrautilizadores"><b-button>Utilizadores</b-button></router-link>
        <router-link to="/ecramarcas"><b-button>Marcas</b-button></router-link>
        <router-link to="/ecratipos"><b-button>Tipos</b-button></router-link>
    </b-button-toolbar>-->
    <Utilizadores />
  </div>
</template>

<script>
  // @ is an alias to /src
  //import HelloWorld from '@/components/HelloWorld.vue'
  //import HelloWorld from '@/components/Teste.vue'
  
  import Utilizadores  from '@/components/Utilizadores.vue'

  export default {
    name: 'EcraUtilizadores',
    components: {
      Utilizadores
    }
  }
</script>
