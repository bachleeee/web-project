<template>
  <div class="my-4">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <img :src=product.img>
        </div>
        <div class="col-4">
          <h1>{{ product.name }}</h1>
          Mô tả:
          <p class="description">{{ product.description }}</p>
          <p class="status">Tình trang:
            {{ product.quantity > 0 ? 'Còn hàng' : 'Hết hàng' }}
          </p>
          Giá:
          <p class="price">{{ formatCurrency(product.price) }}</p>

          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-danger btn-lg " :class="{ 'btn-disabled': product.quantity <= 0 }"
              :disabled="product.quantity <= 0">Đặt hàng</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ProductService from '@/service/product.service'
export default {
  data() {
    return {
      product: null,
    };
  },
  async created() {
    const slug = this.$route.params.slug;
    console.log(`Slug: ${slug}`);
    try {
      const response = await ProductService.getBySlug(`${slug}`);
      console.log('API Response:', response);
      if (response) {
        this.product = response;
      } else {
        console.error('Product data not found.');
      }
    } catch (error) {
      console.error('Error fetching product details:', error);
      if (error.response && error.response.status === 404) {
        console.error('Product not found (404).');
      }
    }
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


<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-details {
  padding: 20px;
}

h1 {
  font-size: 28px;
  margin-bottom: 10px;
}

.description {
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
}

.price {
  font-size: 24px;
  color: #e44d26;
  font-weight: bold;
}
</style>