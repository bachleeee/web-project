import { defineStore } from 'pinia';

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
          this.user = response;
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
    },
  },
});
