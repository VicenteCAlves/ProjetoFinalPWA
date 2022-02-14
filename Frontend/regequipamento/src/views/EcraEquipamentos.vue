<template>
  <div class="ecraequipamentos">
    <Equipamentos />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Equipamentos from '@/components/Equipamentos.vue'

  export default {
    name: 'EcraEquipamentos',
    components: {
      Equipamentos
    }
  }
</script>
