<template>
    <div class="order-item">
      <h3>{{ product.name }}</h3>
      <p><strong>Price:</strong> {{ formatCurrency(product.price) }}</p>
      <p><strong>Quantity:</strong> {{ product.quantity }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object,
    },
    methods: {
      formatCurrency(value) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
      },
    },
  };
  </script>
  
  <style scoped>
  .order-item {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px 0;
  }
  </style>
  