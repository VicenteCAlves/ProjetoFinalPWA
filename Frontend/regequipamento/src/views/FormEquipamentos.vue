<template>
  <div class="formequipamentos">
  

    <AdicionaEquipamentos />
  </div>
</template>

<script>
  // @ is an alias to /src

import AdicionaEquipamentos from '@/components/AdicionaEquipamentos.vue'

  export default {
    name: 'FormEquipamentos',
    components: {
      AdicionaEquipamentos
    }
  }
</script>
