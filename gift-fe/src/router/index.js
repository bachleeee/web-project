import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import Product from '@/views/Product.vue';
import Cart from '@/views/Cart.vue';
import ProductDetail from '@/views/ProductDetail.vue';
import User from '@/views/User.vue'
const routes = [
    {
        path: "/",
        name: "HomePage",
        component: Home,
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('@/views/User.vue'),
        props: true,
      },
    {
        path: "/products",
        name: "Product",
        component: Product,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup,
    },
    {
        path: "/Cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: '/products/:slug',
        name: 'productdetail',
        component: ProductDetail,
      },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;