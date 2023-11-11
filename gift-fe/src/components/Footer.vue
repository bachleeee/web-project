<template>
    <footer class="footer">
        <div class="container text-center">
            <div class="row align-items-end">
                <div class="col">
                    <h4>Tìm Cửa Hàng</h4>
                    <ul>
                        <li><a href="#">Địa Điểm Cửa Hàng</a></li>
                        <li><a href="#">Giờ Làm Việc</a></li>
                        <li><a href="#">Chỉ Đường</a></li>
                    </ul>
                </div>
                <div class="col">
                    <h4>Hỗ Trợ</h4>
                    <ul>
                        <li><a href="#">Hỗ Trợ Khách Hàng</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Vận Chuyển & Đổi Trả</a></li>
                    </ul>
                </div>
                <div class="col">
                    <h4>Về Cửa Hàng</h4>
                    <ul>
                        <li><a href="#">Chúng Tôi</a></li>
                        <li><a href="#">Liên Hệ</a></li>
                        <li><a href="#">Chính Sách Bảo Mật</a></li>
                    </ul>
                </div>
                <div class="col">
    <h4>Theo dõi fanpage</h4>
    <ul>
        <li><a href="#" target="_blank"><i class="fab fa-facebook"></i> Facebook</a></li>
        <li><a href="#" target="_blank"><i class="fab fa-youtube"></i> YouTube</a></li>
        <li><a href="#" target="_blank"><i class="fab fa-google"></i> Google</a></li>
    </ul>
</div>

            </div>
        </div>
    </footer>
</template>

  
<style scoped>
.footer {
    background-color: #000000;
    color: white;
    padding: 20px;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    min-height: 40vh;
    left: 0;
    bottom: 0;
    width: 100%;
}

.col {
    text-align: center;
}

.col h4 {
    font-size: 20px;
    margin-bottom: 10px;
    color: red;
}

.col ul {
    list-style: none;
    padding: 0;
}

.col li {
    margin: 5px 0;
}

.col a {
    color: white;
    text-decoration: none;
    transition: border-bottom 0.3s ease;
}

.col a:hover {
    border-bottom: 1px solid white;
}
</style>
  