import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import UserService from '@/service/user.service';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false, 
    authUser: null,
    isLoggedIn: false,
    user: null
  }),
  actions: {
    async login({ email, password }) {
      try {
        const response = await UserService.login({ email, password });
        if (response) {
          this.isAuthenticated = true;
          console.log("đăng nhập thành công")
          this.isLoggedIn = true;
          this.user = await UserService.get(response._id);
          Cookies.set('isLoggedIn', 'true', { expires: 7 });
        } else {
          this.isAuthenticated = false;
          this.error = response ? response.message : 'Đăng nhập không thành công';
        }
      } catch (error) {
        this.isAuthenticated = false;
        this.error = 'Đăng nhập không thành công';
      }
    },
    logout() {
      this.isAuthenticated = false; 
      this.authUser = null;
      this.error = '';
      this.isLoggedIn = false;
      Cookies.remove('isLoggedIn');
    },
    checkLoginStatus() {
      // Kiểm tra trạng thái đăng nhập từ Cookies khi load trang
      const isLoggedIn = Cookies.get('isLoggedIn');
      this.isLoggedIn = isLoggedIn === 'true';
    },
  },
});
