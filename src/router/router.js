import { createRouter, createWebHistory } from 'vue-router'
// Pages
import Home from '../App.vue'
import About from '../views/About.vue'

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
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router




// import { ref, computed } from 'vue'
// import Home from '../App.vue'
// import About from '../views/About.vue'
// // import NotFound from '../NotFound.vue'

// const routes = {
//   '/': Home,
//   '/about': About
// }

// const currentPath = ref(window.location.hash)

// window.addEventListener('hashchange', () => {
//   currentPath.value = window.location.hash
// })

// const currentView = computed(() => {
//   return routes[currentPath.value.slice(1) || '/']
// })
