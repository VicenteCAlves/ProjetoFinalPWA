<template>
  <div class="ecralogin">
    <Login />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Login  from '@/components/Login.vue'

  export default {
    name: 'EcraLogin',
    components: {
      Login
    }
  }
</script>