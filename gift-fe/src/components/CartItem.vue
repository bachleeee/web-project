<template>
  <div class="cart-item col-6 ">
    <div class="product-info">
      <img :src="product.products[0].img" alt="Product Image" class="product-image">
      <div class="product-details">
        <h4>{{ product.products[0].name }}</h4>
        <p>Giá: {{ formatCurrency(product.products[0].price) }}</p>
        <p>Số lượng: {{ product.products[0].count }}</p>
      </div>
    </div>
    <div class="total-price">
      <p>Tổng: {{ formatCurrency(product.cartTotal) }}</p>
      <button @click="removeFromCart">Xóa</button>
    </div>
  </div>
</template>

<script>
import UserService from '@/service/user.service';
import Cookies from 'js-cookie';

export default {
  props: {
    product: Object,
  },
  methods: {
    formatCurrency(value) { 
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    },
    async removeFromCart() {
      try {
        const confirmed = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm khỏi giỏ hàng?');

        if (!confirmed) {
          return; // Người dùng không xác nhận, không thực hiện xóa
        }
        const cookieValue = Cookies.get('token');

        const result = {
          cart_id: this.product._id,
          product_id: this.product.products[0].product
        };

        await UserService.deleteProductFromCart(cookieValue, result);

        router.push('/'); 
      } catch (error) {
        console.error('Error deleting product from cart:', error);
      }
    },
  },
};
</script>

  
<style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: px;
  border: 1px solid #575656;
  border-radius: 10px;
  width: 90%;
}

.product-info {
  display: flex;
  align-items: center;
}

.product-image {
  width: 170px;
  /* Điều chỉnh kích thước ảnh sản phẩm */
  height: auto;
  /* Đảm bảo tỷ lệ hình ảnh không bị biến đổi */
  margin-right: 10px;
}

.product-details {
  flex-grow: 1;
}

.quantity-controls {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

.quantity-controls button {
  cursor: pointer;
  margin: 0 5px;
}

.total-price {
  text-align: right;
}

.total-price button {
  background-color: #ff0000;
  /* Màu nền của nút Xóa */
  color: #fff;
  /* Màu chữ của nút Xóa */
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}
</style>
  