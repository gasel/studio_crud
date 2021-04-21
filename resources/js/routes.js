import VueRouter from 'vue-router'

const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)
const Dashboard = () => import('./components/Dashboard.vue' /* webpackChunkName: "resource/js/components/dashboard" */)
const CategoryList = () => import('./components/category/List.vue' /* webpackChunkName: "resource/js/components/category/list" */)
const CategoryCreate = () => import('./components/category/Add.vue' /* webpackChunkName: "resource/js/components/category/add" */)
const CategoryEdit = () => import('./components/category/Edit.vue' /* webpackChunkName: "resource/js/components/category/edit" */)
const Login = () => import('./components/Login.vue' /* webpackChunkName: "resource/js/components/login" */)
const Register = () => import('./components/Register.vue' /* webpackChunkName: "resource/js/components/register" */)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome,
        meta: {
            auth: undefined
        }
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard,
        meta: {
            auth: true
        }
    },
    {
        name: 'categoryList',
        path: '/category',
        component: CategoryList,
        meta: {
            auth: true
        }
    },
    {
        name: 'categoryEdit',
        path: '/category/:id/edit',
        component: CategoryEdit,
        meta: {
            auth: true
        }
    },
    {
        name: 'categoryAdd',
        path: '/category/add',
        component: CategoryCreate,
        meta: {
            auth: true
        }
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: {
            auth: undefined
        }
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
        meta: {
            auth: undefined
        }
    }
]
const router = new VueRouter({
    history: true,
    mode: 'history',
    routes: routes
});
export default router