import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Home.vue')
  },
  {
    path: '/searchresult',
    name: 'searchresult',
    component: () => import('../views/SearchResult.vue')
  },
  {
    path: '/SciKnowledgeTree',
    name: 'SciKnowledgeTree',
    component: () => import('../views/SciKnowledgeTree.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
