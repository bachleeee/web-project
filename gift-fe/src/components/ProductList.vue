<template>
  <div class="row">
    <router-link :to="`/products/${product.slug}`" v-for="product in products" :key="product._id" class="col-3 p-2">
      <div class="product-card">
        <div class="product-image">
          <img style="width: 100%; height: auto;" :src="product.img" alt="">
        </div>
        <div class="product-detail m-1">
          <div class="product-title"> {{ product.name }}</div>
          <p class="product-price">{{ formatCurrency(product.price) }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
  
<script>
export default {
  props: {
    products: { type: Array, default: [] },
  },
  methods: {
    formatCurrency(price) {
      const formattedPrice = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(price);

      return `${formattedPrice}`;
    }
  }
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 290px;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image>img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
}

.product-title {
  font-size: 17px;
  font-weight: 500;
}

.product-price {
  font-size: 16px;
  color: #e44d26;
  font-weight: bold;
}
</style>
