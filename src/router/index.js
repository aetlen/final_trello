import Vue from 'vue'
import VueRouter from 'vue-router'
import Constructor from '../views/Constructor.vue'
import Queue from '../views/Queue.vue'
import Portfolio from '../views/Portfolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/constructor',
    name: 'constructor',
    component: Constructor
  },
  {
    path: '/queue',
    name: 'Queue',
    component: Queue
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  }
]

const router = new VueRouter({
  routes
})

export default router
