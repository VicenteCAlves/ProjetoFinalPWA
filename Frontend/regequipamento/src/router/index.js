import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EcraInicial from '../views/EcraInicial.vue'
import EcraEquipamentos from '../views/EcraEquipamentos.vue'
import EcraEmprestimos from '../views/EcraEmprestimos.vue'
import EcraUtilizadores from '../views/EcraUtilizadores.vue'
import EcraMarcas from '../views/EcraMarcas.vue'
import EcraTipos from '../views/EcraTipos.vue'
import EcraLogin from '../views/EcraLogin.vue'
import FormEquipamentos from '../views/FormEquipamentos.vue'
import FormEmprestimos from '../views/FormEmprestimos.vue'
import FormUtilizadores from '../views/FormUtilizadores.vue'
import FormMarcas from '../views/FormMarcas.vue'
import FormTipos from '../views/FormTipos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ecrainicial',
    name: 'EcraInicial',
    component: EcraInicial
  },
  {
    path: '/ecraequipamentos',
    name: 'EcraEquipamentos',
    component: EcraEquipamentos
  },
  {
    path: '/ecraemprestimos',
    name: 'EcraEmprestimos',
    component: EcraEmprestimos
  },
  {
    path: '/ecrautilizadores',
    name: 'EcraUtilizadores',
    component: EcraUtilizadores
  },
  {
    path: '/ecramarcas',
    name: 'EcraMarcas',
    component: EcraMarcas
  },
  {
    path: '/ecratipos',
    name: 'EcraTipos',
    component: EcraTipos
  },
  {
    path: '/formequipamentos',
    name: 'FormEquipamentos',
    component: FormEquipamentos
  },
  {
    path: '/formemprestimos',
    name: 'FormEmprestimos',
    component: FormEmprestimos
  },
  {
    path: '/formutilizadores',
    name: 'FormUtilizadores',
    component: FormUtilizadores
  },
  {
    path: '/formmarcas',
    name: 'FormMarcas',
    component: FormMarcas
  },
  {
    path: '/formtipos',
    name: 'FormTipos',
    component: FormTipos
  },
  {
    path: '/ecralogin',
    name: 'EcraLogin',
    component: EcraLogin
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
