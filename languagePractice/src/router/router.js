import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/User/LoginView.vue'
import RegisterView from '../views/User/RegisterView.vue';
import ProfileView from '../views/User/ProfileView.vue'
import TestView from '../views/TestView.vue';




const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
        path: "/about",
            name: "about",
            component: AboutView
        },
        {
            path: "/login",
                name: "login",
                component: LoginView
            },
        {
            path: "/register",
            name: "register",
            component: RegisterView
        },
        {
            path: "/test",
            name: "test",
            component: TestView
        },
        {
            path: "/profile",
            name : "profile",
            component: ProfileView
        },
    ]
})

export default router;