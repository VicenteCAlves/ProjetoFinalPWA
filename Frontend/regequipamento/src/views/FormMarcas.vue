<template>
  <div class="formmarcas">
  

    <AdicionaMarcas />
  </div>
</template>

<script>
  // @ is an alias to /src

import AdicionaMarcas from '@/components/AdicionaMarcas.vue'

  export default {
    name: 'FormMarcas',
    components: {
      AdicionaMarcas
    }
  }
</script>
