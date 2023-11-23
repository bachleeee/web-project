<template>
  <div class="py-5">
    <div class="container">
      <div class="col-12">
        <div class="row d-flex align-items-center">
          <div class="col-9">
            <h2>GIỎ HÀNG</h2>
          </div>
          <div class="col-3">
            <router-link to="/order">
              <h4>Kiểm tra đơn hàng</h4>
            </router-link>
          </div>
        </div>
        <hr>
        <div class="row">
          <CartItem v-for="product in cartProducts" :key="product._id" :product="product" />
        </div>
        <div v-if="authStore.isLoggedIn" class="d-flex justify-content-end m-5">
          <div class="total-amount">
            <h3>Tổng tiền: {{ formatCurrency(totalAmount) }}</h3>
            <div @click="createOrder" class="btn btn-primary">
              Đặt hàng
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  
<script>
import CartItem from '@/components/CartItem.vue';
import UserService from '@/service/user.service';
import { useAuthStore } from '@/store/auth';
import Cookies from 'js-cookie';

export default {
  components: {
    CartItem,
  },
  data() {
    return {
      cartProducts: [
      ],
      showAddToCartMessage: false,

    };
  },
  methods: {
    formatCurrency(value) {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    },
    async getUserCart() {
      const cookieValue = Cookies.get('token');
      console.log(cookieValue);
      try {
        if (this.authStore.isLoggedIn) { // Kiểm tra isLoggedIn trước khi gọi UserService
          this.cartProducts = await UserService.getCart(cookieValue);
          console.log(this.cartProducts);
        } else {
          console.error('User is not logged in.');
        }
      } catch (error) {
        console.log(error);
      }
    },
    async createOrder() {
      try {
        const cookieValue = Cookies.get('token');

        const result = {
          total: this.totalAmount
        }

        console.log(result);

        if (this.authStore.isLoggedIn) {
          await UserService.crateOrder(cookieValue, result);
          this.showAddToCartMessage = true;
        }

        if (this.showAddToCartMessage) {
          window.alert("Đặt hàng thành công");
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
  computed: {
    totalAmount() {
      return this.cartProducts.reduce((total, product) => {
        return total + product.products[0].price * product.products[0].count;
      }, 0);
    },
    authStore() {
      return useAuthStore();
    },
  },
  mounted() {
    this.getUserCart();
  },
};
</script>
  
<style scoped>
.btn-primary {
  font-size: 25px;
}
</style>
