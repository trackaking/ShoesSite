import { createRouter, createWebHistory } from 'vue-router';
import ProfileView from '@/views/ProfileView.vue';
import AboutView from '@/views/AboutView.vue';
import itemInfoView from '@/views/ItemInfoView.vue';
import CartView from '@/views/CartView.vue';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import CreatorView from '../views/CreatorPage.vue';
import SignupView from '../views/SignupView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/login',
        name: 'LoginView',
        component: LoginView,
    },
    {
        path: '/Home',
        name: 'CreatorView',
        component: CreatorView,
    },
    {
        path: '/signup',
        name: 'SignupView',
        component: SignupView,
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView,
    },
    {
        path: '/info/:id',
        name: 'itemInfoView',
        component: itemInfoView,
    },
    {
        path: '/profile',
        name: 'ProfileView',
        component: ProfileView,
    },
    {
        path: '/cart',
        name: 'CartView',
        component: CartView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
