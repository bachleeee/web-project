import { createWebHistory, createRouter } from "vue-router";
import User from '@/views/User.vue';
import Login from '@/views/Login.vue';
import Product from '@/views/Product.vue';
import Order from '@/views/Order.vue';
const routes = [
    {
        path: "/User",
        name: "User",
        component: User,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/",
        name: "Product",
        component: Product,
    },
    {
        path: "/order",
        name: "Order",
        component: Order,
    },
    {
        path: "/products/:id",
        name: "product.edit",
        component: () => import("@/views/ProductEdit.vue"),
        props: true 
    },
    {
        path:"/",
        name: "product.add",
        component: () => import("@/views/ProductAdd.vue"),
        props: true
    }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;