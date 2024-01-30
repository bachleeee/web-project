<template>
    <div class="header-wrapper">
        <TopHeader></TopHeader>
        <div class="bot-header">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <router-link to="/" tag="li" class="menu-item">
                            <img src="../assets/img/mybookstrore (1).png" alt="logo" style="width: 240px;">
                        </router-link>
                    </div>
                    <div class="col-7">
                        <div class="row">
                            <div class="dropdown">
                                <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown" aria-expanded="false">
                                    <img src="../assets/ico_menu.svg" alt="">
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <router-link to="/van-hoc" tag="li" class="dropdown-item">Văn học</router-link>     
                                    <router-link to="/tam-ly-hoc" tag="li" class="dropdown-item">Tâm lý</router-link>
                                    <router-link to="/van-hoc" tag="li" class="dropdown-item">Tiểu thuyết</router-link>   
                                    <router-link to="/tam-ly-hoc" tag="li" class="dropdown-item">Kinh tế</router-link>
                                </div>
                            </div>
                            <form action="/search" method="GET" class="form-inline">
                                <div class="input-group">
                                    <input type="text" name="name" class="form-control" style="width: 450px;"
                                        placeholder="Bạn muốn tìm quà tặng...">
                                    <div class="input-group-append">
                                        <button type="submit" class="btn btn-outline-danger">Tìm kiếm</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="d-flex justify-content-end">
                            <div class="btn-click d-flex">
                                <router-link to="/cart" class="btn-cart mr-2">
                                    <i class="fa fa-shopping-cart"></i>
                                    <p>Giỏ hàng</p>
                                </router-link>
                                <div v-if="authStore.isLoggedIn">
                                    <div  class="btn-user mr-2">
                                        <i class="fa fa-user"></i>
                                        <p>{{ authStore.user.name }}</p>
                                    </div>  
                                </div>
                                <div v-else>
                                    <router-link to="/login" class="btn-user mr-2">
                                        <i class="fa fa-user"></i>
                                        <p>Đăng nhập</p>
                                    </router-link>
                                </div>
                                <div v-if="authStore.isLoggedIn" class="ml-2">
                                    <button class="btn btn-outline-danger" @click="logoutClick">Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                if (this.authStore.isLoggedIn) { 
                    this.user = await UserService.get(this.authStore.user._id);
                    console.log(this.user);
                } else {
                    console.error('User is not logged in.');
                }
            } catch (error) {
                console.log(error);
            }
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

<style scoped>
.bot-header {
    background-color: white;
    padding: 10px 0;
}

.btn-cart,
.btn-user {
    transition: all 0.4s ease;
    height: 40px;
    width: 80px;

    display: block;
    text-align: center;
}

.btn-cart>p,
.btn-user>p {
    font-size: 15px;
}

.btn-click>a {
    color: rgb(0, 0, 0);
}

.btn-cart .num {
    background: #c92127;
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
    color: #c92127;
}

.dropdown:hover>.dropdown-menu {
    display: block;
}

.dropdown>.dropdown-toggle:active {
    pointer-events: none;
}
</style>