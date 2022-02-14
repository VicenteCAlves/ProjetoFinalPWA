<template>
  <div class="formutilizadores">
  

    <AdicionaUtilizadores />
  </div>
</template>

<script>
  // @ is an alias to /src

import AdicionaUtilizadores from '@/components/AdicionaUtilizadores.vue'

  export default {
    name: 'FormUtilizadores',
    components: {
      AdicionaUtilizadores
    }
  }
</script>
