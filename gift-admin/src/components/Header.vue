<template>
    <div class="header-wrapper">
        <div class="container ">
            <div class="row top-header">
                <i class="fa-solid fa-gift"></i>
                <h1>
                    Chào mừng đến trang quản lý</h1>
                <i class="fa-solid fa-gift"></i>
            </div>

        </div>
        <div class="sticky-nav">
            <div class="header-menu container">
                <ul class="menu-parent">
                    <li class="menu-item">
                        <router-link to="/product">Danh sách sản phẩm</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/user">Danh sách khách hàng</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/order">Quản lý đơn hàng</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.top-header {
    text-align: center;
    margin: 30px;
    justify-content: center;
    background-color: rgb(245, 231, 231);
}

h1 {
    font-size: 2.5em;
    color: #f42525;
    margin-bottom: 20px;
}
</style>

<style>
.sticky-nav {
    position: sticky;
    top: 0;
    background-color: royalblue;
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
</style>