<template>
    <div class="py-5">
        <div class="container">
            <div class="col-12">
            </div>
            <h2>GIỎ HÀNG</h2>
            <hr>
            <div class="order-details">
                <h1>Order Details</h1>
                <!-- <p><strong>Order ID:</strong> {{ order._id }}</p>
                <p><strong>Amount:</strong> {{ formatCurrency(order.amount) }}</p>
                <p><strong>Status:</strong> {{ order.orderStatus }}</p>
   -->
                <h2>Products:</h2>
                <!-- <OrderItem v-for="product in order.products" :key="product._id" :product="product" />
   -->
            </div>
        </div>
    </div>
</template>
  
<script>
import OrderItem from '@/components/OrderItem.vue';

export default {
    components: {
        OrderItem,
    },
    props: {
        order: Object,
    },
    methods: {
        formatCurrency(value) {
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
        },
    },
};
</script>
  
<style scoped>
.order-details {
    margin: 20px;
}

.back-to-orders {
    display: block;
    margin-top: 20px;
    color: #3498db;
    text-decoration: none;
}
</style>
  