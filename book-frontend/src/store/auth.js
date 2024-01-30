import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import UserService from '@/service/user.service';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    authUser: null,
    isLoggedIn: false,
  }),
  actions: {
    async login({ email, password }) {
      try {
        const response = await UserService.login({ email, password });
        if (response) {
          this.isAuthenticated = true;
          console.log("đăng nhập thành công")

          this.isLoggedIn = true;
          const getUser = await UserService.get(response._id);
          console.log(getUser)
          Cookies.set('isLoggedIn', 'true', { expires: 7 });
          Cookies.set('user', JSON.stringify(getUser), { expires: 7 });

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
      Cookies.remove('user');
    },
    checkLoginStatus() {
      const isLoggedIn = Cookies.get('isLoggedIn');
      const userString = Cookies.get('user');

      this.isLoggedIn = isLoggedIn === 'true';

      this.user = userString ? JSON.parse(userString) : null;
    },
  },
});
