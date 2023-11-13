<template>
    <div class="header-wrapper">
        <div class="container">
            <h1>Chào mừng đến trang quản lý</h1>
        </div>
        <div class="sticky-nav">
            <div class="header-menu container">
                <ul class="menu-parent">
                    <li class="menu-item">
                        <router-link to="/">Danh sách sản phẩm</router-link>
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

<script>

</script>

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