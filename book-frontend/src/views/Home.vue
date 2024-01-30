<template>
    <div class="page">
        <div class="container py-3">
            <div class="row">
                <div class="col-8">
                    <div style="">
                        <swiper :pagination="true" :modules="modules" class="mySwiper">
                            <swiper-slide><img src="../assets/img/banner/1.jpg" alt=""></swiper-slide>
                            <swiper-slide><img src="../assets/img/banner/2.jpg" alt=""></swiper-slide>
                            <swiper-slide><img src="../assets/img/banner/3.jpg" alt=""></swiper-slide>
                        </swiper>
                    </div>
                </div>
                <div class="col-4">
                    <img src="../assets/img/banner/4.png" alt="">
                    <img src="../assets/img/banner/5.png" alt="">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="intro-section">
                <div class="top-title p-3">
                   
                    <h5>
                        Danh mục sản phẩm
                    </h5>
                    
                </div>
                <div class="content">
                    <div class="row mx-4">
                        <div class="col-2">
                            <img src="../assets/img/widget/kt.jpg" alt="">
                            <p>Kinh tế</p>
                        </div>
                        <div class="col-2">
                            <img src="../assets/img/widget/nt.jpg" alt="">
                            <p>Ngôn tình</p>
                        </div>
                        <div class="col-2">
                            <img src="../assets/img/widget/tl.jpg" alt="">
                            <p>Tâm lý</p>
                        </div>
                        <div class="col-2">
                            <img src="../assets/img/widget/tt.jpg" alt="">
                            <p>Tiểu thuyết</p>
                        </div>
                        <div class="col-2">
                            <img src="../assets/img/widget/vh.jpg" alt="">
                            <p>Văn học</p>
                        </div>
                        <div class="col-2">
                            <img src="../assets/img/widget/tn.jpg" alt="">
                            <p>Thiếu nhi</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-section">
                <div class="top-title p-3">
                    <h5>
                        Sách bán chạy
                    </h5>
                    
                </div>
                <div class="content">
                    <div class="row d-flex justify-content-center">
                        <ProductList :products="visibleProducts" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import ProductService from "@/service/product.service";
import ProductList from "@/components/ProductList.vue";
import { useAuthStore } from '@/store/auth';

import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default {
    components: {
        ProductList,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
    data() {
        return {
            products: [],
            visibleProducts: [],
            maxVisibleProducts: 8,
            user: null
        };
    },
    methods: {
        async getHomeProduct() {
            try {
                this.products = await ProductService.getAllCat("van-hoc");
                this.updateVisibleProducts();
            } catch (error) {
                console.log(error);
            }
        },
        updateVisibleProducts() {
            this.visibleProducts = this.products.slice(0, this.maxVisibleProducts);
        },

    },
    computed: {
        authStore() {
            return useAuthStore();
        },
    },
    mounted() {
        this.getHomeProduct();
    },


};
</script>

<style scoped>
.page {
    background-color: #F0F0F0;
}

.col {
    padding-left: 5px;
    padding-right: 5px;

}

.home-section {
    height: 650px;
    border-radius: 20px;
    background-color: white;
    margin: 0px;
}

.intro-section {
    height: 230px;
    border-radius: 20px;
    background-color: white;
    margin: 20px 0px;
}

.swiper-slide>img {
    width: 100%;
    height: auto;
    /* Đảm bảo tỷ lệ khung hình bảo toàn */
}

.top-title {
    background-color: rgb(255, 193, 203);
    border-radius: 20px  20px 0 0 ;
    margin-bottom: 20px;
}
</style>