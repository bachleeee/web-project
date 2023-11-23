<template>
  <div class="my-4">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <img :src="product.img">
        </div>
        <div class="col-4">
          <h1>{{ product.name }}</h1>
          Mô tả:
          <p class="description">{{ product.description }}</p>
          <p class="status">Tình trang:
            {{ product.quantity > 0 ? 'Còn hàng' : 'Hết hàng' }}
          </p>
          Giá:

          <div class="d-flex justify-content-between my-4 ">
            <p class="price">{{ formatCurrency(product.price) }}</p>
            <div>
              <label for="quantity">Số lượng:</label>
              <input class="quantity-input" type="number" id="quantity" v-model="quantity" min="1">
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-danger btn-lg" :class="{ 'btn-disabled': product.quantity <= 0 }"
              :disabled="product.quantity <= 0 || !authStore.isLoggedIn" @click="addToCart">
              {{ authStore.isLoggedIn ? 'Đặt hàng' : 'Đăng nhập để đặt hàng' }}
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ProductService from '@/service/product.service';
import UserService from '@/service/user.service';
import { useAuthStore } from '@/store/auth';
import Cookies from 'js-cookie';

export default {
  data() {
    return {
      product: null,
      user: null,
      quantity: 1,
      showAddToCartMessage: false,
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
    },
    async addToCart() {
      try {
        const cookieValue = Cookies.get('token');

        const cartItem = {
          _id: this.product._id,
          count: this.quantity,
        };

        const newCartItemArray = { cart: [cartItem] };

        if (this.authStore.isLoggedIn) {
          await UserService.addtocart(cookieValue, newCartItemArray);
          this.showAddToCartMessage = true;
        }

        if (this.showAddToCartMessage) {
          window.alert("Đã thêm sản phẩm vào giỏ hàng");
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
  computed: {
    authStore() {
      return useAuthStore();
    },
  },
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

.quantity-input {
  margin: 0;
  border: 1px solid #ced4da;
  width: 60px;
  height: 40px;
  text-align: center;
}

.quantity-input:hover {
  border-color: #6c757d;
}
</style>