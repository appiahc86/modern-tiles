import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from "../views/About";
import Contact from "../views/Contact";
import Gallery from "../views/Gallery";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About

  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery

  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
