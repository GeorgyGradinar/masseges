import { createRouter, createWebHistory,  } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Create-message',
        component: () => import('../components/CreateMassage')
    },
    {
        path: '/show-messages',
        name: 'Show-messages',
        component: () => import('../components/ShowMessage')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
