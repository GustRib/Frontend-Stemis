import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import DrinkList from '../views/DrinkList.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },

    {
        path: "/letra/:letra",
        name: 'byLetra',
        component: DrinkList,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;