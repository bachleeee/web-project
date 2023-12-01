import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import Product from '@/views/Product.vue';
import Cart from '@/views/Cart.vue';
import ProductDetail from '@/views/ProductDetail.vue';
import Order from '@/views/Order.vue';
import Intro from '@/views/Intro.vue';
import VanHocBook from '@/views/VanHocBook.vue';
import TamLyBook from '@/views/TamLyBook.vue';
// import VanHocBook from '@/views/VanHocBook.vue';
// import VanHocBook from '@/views/VanHocBook.vue';
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
        path: "/search",
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
        path: "/order",
        name: "order",
        component: Order,
    },
    {
        path: '/products/:slug',
        name: 'productdetail',
        component: ProductDetail,
    },
    {
        path: "/intro",
        name: "intro",
        component: Intro,
    },
    {
        path: "/van-hoc",
        name: "van-hoc",
        component: VanHocBook,
    },
    {
        path: "/tam-ly-hoc",
        name: "tam-ly-hoc",
        component: TamLyBook,
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;