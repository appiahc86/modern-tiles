import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
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

  },
//    redirect to home page if route not found
  { 
    path: '/:catchAll(.*)*',
    redirect: {name: 'Home'}
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
