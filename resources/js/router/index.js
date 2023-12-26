// resources/js/router/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../../views/Home.vue'; // Update the relative path
import About from '../../views/About.vue'; // Update the relative path
import Logout from '../../views/Logout.vue';
import TaskList from '../components/TaskList.vue';
import TaskForm from '../components/TaskForm.vue';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home',
    },
    {
        path: '/about',
        component: About,
        name: 'about',
    },
    {
        path: '/tasks',
        component: TaskList,
        name: 'tasks',
    },
    {
        path: '/tasks/create',
        component: TaskForm,
        name: 'tasks.create',
    },
    {
        path: '/tasks/:id/edit',
        component: TaskForm,
        name: 'tasks.edit',
    },
    {
        path: '/logout',
        component: Logout,
        name: 'logout',
    },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;
