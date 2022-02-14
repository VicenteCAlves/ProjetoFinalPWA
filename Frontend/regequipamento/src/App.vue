<template>
  <div id="app">
    <div id="logo">
      <!--<img src="./assets/equipamento.svg" width="150%" >-->
      <img src="./assets/CircuitoBranco.svg" width="100%" >
    </div>
    <div id="nav" class="justify-content-center">
      <p><b>REGISTO DE EQUIPAMENTOS</b></p>
      <b-button-toolbar key-nav aria-label="Toolbar with button groups" class="justify-content-center">
        <router-link to="/"><b-button>Inicio</b-button></router-link>
        <router-link to="/EcraInicial"><b-button>Principal</b-button></router-link>
        <router-link to="/EcraLogin"><b-button>Login</b-button></router-link>
      </b-button-toolbar>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
  p {
    color:darksalmon;
  }

  #logo {
    background-color: #2c3e50;
    left: auto;
    padding: 10px;
    display: block;
    float: left;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    
    color: #2c3e50;
  }

  #nav {
    background-color: #2c3e50;
    display: block;
    margin-left: 0px;
    padding: 30px;
    
   
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  
</style>
