<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-3 h-10">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-3 text-center">

              <div class="mb-md-5 mt-md-4 pb-5">

                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-white-50 mb-5">Por favor, introduza o seu utilizador e senha!</p>

                <div class="form-outline form-white mb-4">
                  <input type="text" id="utilizador" class="form-control form-control-lg" />
                  <label class="form-label" for="utilizador">Utilizador</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input type="password" id="senha" class="form-control form-control-lg" />
                  <label class="form-label" for="senha">Senha</label>
                </div>

                <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="/ecrautilizadores">Esqueceu-se da senha?</a></p>

                <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
              </div>

              <div>
                <p class="mb-0">Não tem uma conta? <a href="#!" class="text-white-50 fw-bold">Registe-se</a></p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>

</style>