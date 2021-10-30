import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from "../views/About";
import Contact from "../views/Contact";
import Gallery from "../views/Gallery";
import Gallery2 from "../views/Gallery2";

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
    path: '/gallery/page/2',
    name: 'Gallery2',
    component: Gallery2

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
