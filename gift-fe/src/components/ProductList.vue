<template>
  <div class=" py-5">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col">
          <ProductCard></ProductCard>
        </div>
        <div class="col">
          <ProductCard></ProductCard>
        </div>
        <div class="col">
          <ProductCard></ProductCard>
        </div>
        <div class="col">
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
};
</script>

<style scoped>

.col {
  margin-bottom: 20px; 
}

@media (max-width: 768px) {
  .product-wrapper-2 {
    flex-direction: column;
    align-items: center; 
  }

  .col {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
