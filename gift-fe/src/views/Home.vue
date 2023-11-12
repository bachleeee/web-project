<template>
    <div class="page">
        <div class="main-banner">
            <img src="../assets/img/main-banner.png" alt="">
        </div>
        <div class="container ">
            <div class="main-bg ">
                <div class="intro-container mb-5 mt-4">
                    <div class="row">
                        <div class="col">
                            <div class="policyHome d-flex flex-row">
                                <div class="img mr-2">
                                    <img src="../assets/img/widget/ribbon.png" alt="">
                                </div>
                                <div class="text">
                                    <div class="t1">
                                        SẢN PHẨM ĐA DẠNG
                                    </div>
                                    <div class="t2">
                                        Hơn 1000 sản phẩm
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="policyHome d-flex flex-row">
                                <div class="img mr-2">
                                    <img src="../assets/img/widget/delivery.png" alt="">
                                </div>
                                <div class="text">
                                    <div class="t1">
                                        GIAO HÀNG TẬN NƠI
                                    </div>
                                    <div class="t2">
                                        Áp dụng cho toàn quốc
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="policyHome d-flex flex-row">
                                <div class="img mr-2">
                                    <img src="../assets/img/widget/shopping.png" alt="">
                                </div>
                                <div class="text">
                                    <div class="t1">
                                        ĐỔI TRẢ MIỄN PHÍ
                                    </div>
                                    <div class="t2">
                                        Đổi trả trong vòng 7 ngày
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="policyHome d-flex flex-row">
                                <div class="img mr-2">
                                    <img src="../assets/img/widget/shopping-cart.png" alt="">
                                </div>
                                <div class="text">
                                    <div class="t1">
                                        DỊCH VỤ HOÀN HẢO
                                    </div>
                                    <div class="t2">
                                        Gói quà, thiệp miễn phí
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="intro-container mb-5">
                    <div class="intro-title">
                        <h2>QUÀ TẶNG MỚI NHẤT</h2>
                    </div>
                    <div class="intro-product">
                        <ProductList></ProductList>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
    components: {
        ProductList
    }
}
</script>

<style scoped>
.col {
    padding-left: 5px;
    padding-right: 5px;

}

.main-banner img {
    width: 100%;
    height: auto;
    display: block;
    /* Loại bỏ khoảng trắng dưới ảnh */
    margin: 0 auto;
    /* Canh giữa ảnh */
}

.main-bg {
    background-color: white;
}

.policyHome {
    margin-bottom: 20px;
    padding: 10px 20px;
    background: #f6f6f6;
    border: 1px solid #f7a9a9;
}

.policyHome .img {
    padding: 10px;
    border: 1px solid #f7a9a9;
    border-radius: 50%;
}

.policyHome .text .t1 {
    font-weight: 500;
}

.policyHome .text .t2 {
    font-size: 14px;
    color: #838282;
}

.intro-title {
    border-bottom: 2px solid red;
}</style>