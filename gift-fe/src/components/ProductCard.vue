<template>
  <div class="product-card">
    <div class="product-image"  >
      <img style="width: 100%; height: auto;" src="../assets/img/cocsu/coc-su-2-mau-5-300x300.jpg" alt="">
    </div>
    <div class="product-detail mt-3">
      <div class="product-title">Gazelle-indoor</div>
      <p class="product-price">300.300</p>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #ddd; 
  border-radius: 8px; 
  overflow: hidden; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s ease; 
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd; 
}

.product-detail {
  padding: 15px;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-price {
  font-size: 16px;
  color: #e44d26; 
  font-weight: bold;
}
</style>