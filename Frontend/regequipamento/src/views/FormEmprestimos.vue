<template>
  <div class="formemprestimos">
    <AdicionaEmprestimos />
  </div>
</template>

<script>
  // @ is an alias to /src
  import AdicionaEmprestimos from '@/components/AdicionaEmprestimos.vue'

  export default {
    name: 'FormEmprestimos',
    components: {
      AdicionaEmprestimos
    }
  }
</script>
