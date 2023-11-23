<template>
    <div class="header-wrapper">
        <TopHeader></TopHeader>
        <div class="bot-header">
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <router-link to="/" tag="li" class="menu-item">
                            <img src="../assets/img/logo.png" alt="logo">
                        </router-link>
                    </div>
                    <div class="col-10 d-flex flex-column">
                        <div class="mt-4 d-flex justify-content-end">
                            <div class="btn-click d-flex">
                                <router-link to="/cart" class="btn-cart mr-2">
                                    <span><i class="fa fa-shopping-cart"></i>Giỏ hàng</span>
                                </router-link>
                                <div>
                                    <router-link to="/login" v-if="!authStore.isLoggedIn" class="btn-user mr-2">
                                        <i class="fa fa-user mr-1"></i>
                                    </router-link>
                                </div>
                                <div>
                                    <router-link to="/user" v-if="authStore.isLoggedIn" class="btn-user">
                                        {{ authStore.user.name }}
                                    </router-link>
                                </div>
                                <div v-if="authStore.isLoggedIn" class="ml-2">
                                    <button class="btn btn-outline-danger" @click="logoutClick">Đăng xuất</button>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div class="mt-4 d-flex justify-content-end">
                            <form action="/search" method="GET" class="form-inline">
                                <div class="input-group">
                                    <input type="text" name="name" class="form-control" style="width: 400px;"
                                        placeholder="Bạn muốn tìm quà tặng...">
                                    <select class="product-cat" name="category" id="" style="width: 200px;">
                                        <option value="0">Tất cả danh mục</option>
                                        <option value="coc-su">Cốc sứ</option>
                                        <option value="dong-ho">Đồng hồ</option>
                                        <option value="khung-anh">Khung ảnh</option>
                                        <option value="gau-bong">Gấu bông</option>
                                        <option value="do-trang-tri">Đồ trang trí</option>
                                    </select>
                                        <div class="input-group-append">
                                            <button type="submit" class="btn btn-outline-danger">Tìm kiếm</button>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sticky-nav">
            <div class="header-menu container">
                <ul class="menu-parent">
                    <li class="menu-item">
                        <router-link to="/">Trang chủ</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/intro">Giới thiệu</router-link>
                    </li>
                    <li class="dropdown menu-item">
                        <router-link to="/products" class="dropdown-toggle">Sản phẩm</router-link>
                        <ul class="dropdown-menu">
                            <li><router-link to="/products/coc-su">Cốc sứ</router-link></li>
                            <li><router-link to="/products/khung-anh">Khung ảnh</router-link></li>
                            <li><router-link to="/products/gau-bong">Gấu bông</router-link></li>
                            <li><router-link to="/products/dong-ho">Đồng hồ</router-link></li>
                            <li><router-link to="/products/do-trang-tri">Đồ trang trí</router-link></li>
                        </ul>
                    </li>
                    <li class="dropdown menu-item">
                        <router-link to="/qua-tang-su-kien" class="dropdown-toggle">Quà tặng sự kiện</router-link>
                        <ul class="dropdown-menu">
                            <li><router-link to="/qua-tang-sinh-nhat">Quà sinh nhật</router-link></li>
                            <li><router-link to="/qua-tang-giang-sinh">Quà giáng sinh</router-link></li>
                            <li><router-link to="/qua-luu-niem">Quà lưu niệm</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue';
import UserService from '@/service/user.service';
import { useAuthStore } from '@/store/auth';

export default {
    components: {
        TopHeader
    },
    computed: {
        authStore() {
            return useAuthStore();
        },
    },
    data() {
        return {
            showDropdown: false,
            user: null,
        };
    },
    methods: {
        async getUser() {
            try {
                if (this.authStore.isLoggedIn) { // Kiểm tra isLoggedIn trước khi gọi UserService
                    this.user = await UserService.get(this.authStore.user._id);
                    console.log(this.user);
                } else {
                    console.error('User is not logged in.');
                }
            } catch (error) {
                console.log(error);
            }
        },
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        logoutClick() {
            const shouldLogout = window.confirm('Bạn có chắc chắn muốn đăng xuất?');

            if (shouldLogout) {
                this.authStore.logout();
            }
        },

    },
    mounted() {
        this.getUser()
    },
}
</script>

<script setup>
import { useAuthStore } from '@/store/auth';
const { isLoggedIn, logout } = useAuthStore();

const logoutClick = () => {
    const shouldLogout = window.confirm('Bạn có chắc chắn muốn đăng xuất?');

    if (shouldLogout) {
        logout();
        this.$router.go(0);
    }
};
</script>

<style>
.bot-header {
    background-color: white;
    padding: 10px 0;
}

.btn-cart,
.btn-user {
    transition: all 0.4s ease;
    height: 42px;
    border: 1px solid red !important;
    border-radius: 3px;
    padding: 10px;
    display: block;
    width: 160px;
    text-align: center;
}

.btn-click>a {
    color: red;
}

.btn-cart:hover,
.btn-user:hover {
    background: red !important;
    color: #fff !important;
}

.btn-cart:hover .fa-shopping-cart,
.btn-user:hover .fa-user {
    filter: brightness(0%) invert(100%);
}

.btn-cart .num {
    background: red;
    color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    margin-left: 5px;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.fa-shopping-cart,
.fa-user {
    color: red;
}

.product-cat {
    background-color: rgb(229, 229, 229);
    border: none;
}

/* .bot-header end */

.sticky-nav {
    position: sticky;
    top: 0;
    background-color: red;
    height: 40px;
    z-index: 100;
    font-size: 17px;
}

.header-menu {
    display: flex;
    justify-content: start;
}

.menu-parent {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
}

.menu-parent>.menu-item>a {
    margin: 10px;
    line-height: 40px;
    cursor: pointer;
    transition: background-color 0.3s;
    position: relative;
    color: white;
}

.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    list-style: none;
    padding: 0 0;
    margin: 0;
    width: 200px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.menu-parent li:hover .dropdown-menu {
    display: block;
}

.dropdown-menu>li {
    background-color: #ffffff;
    height: 40px;
    text-align: center;
}

.dropdown-menu>li>a {
    display: block;
    text-decoration: none;
    color: #000000;
    line-height: 2;
}

.dropdown-menu li:hover {
    background-color: #f0f0f0;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>