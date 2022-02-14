<template>
  <div class="formtipos">
  

    <AdicionaTipos />
  </div>
</template>

<script>
  // @ is an alias to /src

import AdicionaTipos from '@/components/AdicionaTipos.vue'

  export default {
    name: 'FormTipos',
    components: {
      AdicionaTipos
    }
  }
</script>
