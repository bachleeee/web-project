<template>
  <div class="my-4">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <img :src="product.img" style="width: 370px;">
          <div class="d-flex justify-content-center mt-4">
            <button type="button" class="btn btn-danger btn-lg" :class="{ 'btn-disabled': product.quantity <= 0 }"
              :disabled="product.quantity <= 0 || !authStore.isLoggedIn" @click="addToCart">
              {{ authStore.isLoggedIn ? 'Thêm vào giỏ hàng' : 'Đăng nhập để Thêm vào giỏ hàng' }}
            </button>
          </div>
        </div>
        <div class="col-7">
          <h1>{{ product.name }}</h1>
          <p class="status">Tình trang:
            {{ product.quantity > 0 ? 'Còn hàng' : 'Hết hàng' }}

          </p>
          <p class="nxb">Nhà xuất bản: Nhà xuất bản trẻ
          </p>
          <div class="d-flex justify-content-between my-4 ">
            <p class="price">{{ formatCurrency(product.price) }}</p>
          </div>
          <div>
            <label for="quantity">Số lượng:</label>
            <input class="quantity-input" type="number" id="quantity" v-model="quantity" min="1">
          </div>
        </div>
      </div>
      <div class="home-section mt-4">
        <div class="home-book">
          <div class="top-title p-3">
            <div class="row">
              <div class="col-2">
                <p class="des">Mô tả</p>
              </div>
            </div>
          </div>
          <div class="content">
            <p>{{ product.description }}</p>
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
      maxQuantityExceeded: false,
    };
  },
  methods: {
    async getProduct() {
      const slug = this.$route.params.slug;
      console.log(`Slug: ${slug}`);
      try {
        this.product = await ProductService.getBySlug(`${slug}`);
        console.log('API Response:', this.product);

      } catch (error) {
        console.error('Error fetching product details:', error);
        if (error.response && error.response.status === 404) {
          console.error('Product not found (404).');
        }
      }
    },
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
          if (this.quantity > this.product.quantity) {
            this.maxQuantityExceeded = true;
          } else {
            await UserService.addtocart(cookieValue, newCartItemArray);
            this.showAddToCartMessage = true;
          }
        }

        if (this.maxQuantityExceeded) {
          window.alert("Quá số lượng sản phẩm");
          this.$router.go(0)
        } else if (this.showAddToCartMessage) {
          window.alert("Đã thêm sản phẩm vào giỏ hàng");
          this.$router.go(0)
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
  created() {
    this.getProduct()
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
  font-size: 30px;
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