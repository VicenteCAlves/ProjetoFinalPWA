<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import HelloWorld from '@/components/Teste.vue'
//import HelloWorld from '@/components/Equipamentos.vue'
//import HelloWorld from '@/components/Utilizadores.vue'
import HelloWorld from '@/components/Marcas.vue'
//import HelloWorld from '@/components/Tipos.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
