<template>
    <div class="header-wrapper">
        <div class="bot-header">
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <a href="">
                            <img src="../assets/img/logo.png" alt="logo">
                        </a>
                    </div>
                    <div class="col-10 d-flex flex-column">
                        <div class="mt-4 d-flex justify-content-end">
                            <div class="btn-click d-flex ">
                                <div class="btn-cart mr-2">
                                    <span><i class="fa fa-shopping-cart mr-2"></i>Giỏ hàng</span>
                                    <span class="num ml-2">0</span>
                                </div>
                                <div class="btn-user">
                                    <span><i class="fa fa-user mr-2"></i>Đăng nhập</span>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 d-flex justify-content-end">
                            <form action="/search" method="GET" class="form-inline">
                                <div class="input-group">
                                    <input type="text" name="query" class="form-control" style="width: 400px;"
                                        placeholder="Bạn muốn tìm quà tặng...">
                                    <select class="product-cat" name="product-cat" id="" style="width: 200px;">
                                        <option value="0">Tất cả danh mục</option>
                                        <option value="0">Cốc sứ</option>
                                        <option value="0">Đồng hồ</option>
                                        <option value="0">Khung ảnh</option>
                                        <option value="0">Gấu bông</option>
                                        <option value="0">Đồ trang trí</option>
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
                    <li class="menu-item">Trang chủ</li>
                    <li class="menu-item">Giới thiệu</li>
                    <li class="dropdown menu-item">
                        Sản phẩm
                        <ul class="dropdown-menu ">
                            <li><a href="#">Cốc sứ</a></li>
                            <li><a href="#">Khung ảnh</a></li>
                            <li><a href="#">Gấu bông</a></li>
                            <li><a href="#">Đồng hồ</a></li>
                            <li><a href="#">Đồ trang trí</a></li>
                        </ul>
                    </li>
                    <li class="dropdown menu-item ">
                        Quà tặng sự kiện
                        <ul class="dropdown-menu ">
                            <li><a href="#">Quà sinh nhật</a></li>
                            <li><a href="#">Quà giáng sinh</a></li>
                            <li><a href="#">Quà lưu niệm</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

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
    width: 150px;
    text-align: center;
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
    color: white;
    font-size: 17px;
}

.header-menu {
    display: flex;
    justify-content: center;
}

.menu-parent {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
}

.menu-parent .menu-item {
    margin-right: 20px;
    line-height: 40px;
    cursor: pointer;
    transition: background-color 0.3s;
    position: relative;
}

.menu-parent .menu-item:hover {
    background-color: #f0f0f0;
    color: rgb(0, 0, 0);
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
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.menu-parent .menu-item:hover .dropdown-menu {
    display: block;
}

.dropdown-menu li {
    background-color: #ffffff;
}

.dropdown-menu li a {
    display: block;
    text-decoration: none;
    color: #000000;
    text-align: center;
}

.dropdown-menu li:hover {
    background-color: #f0f0f0;
}
</style>