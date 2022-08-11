import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Create from '../views/Create.vue'
import Tag from '../views/Tag.vue'
import Register from '../views/Register.vue'
import LogIn from '../views/LogIn.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/tags/:tag',
    name: 'Tag',
    component: Tag
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    //catchall 404
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
