<template>
    <div class="container">
        <div v-if="authStore.isLoggedIn" class="page row my-5">
            <div class="col-md-10">
                <InputSearch v-model="searchText" />
            </div>
            <div class="mt-3 col-md-4">
                <h4>
                    Danh sách sản phẩm 
                    <i class="fa-solid fa-gift"></i>
                </h4>
                <ProductList v-if="filteredProductsCount > 0" :products="filteredProducts"
                    v-model:activeIndex="activeIndex" />
                <p v-else>Không có liên hệ nào.</p>
                <div class="mt-3 row justify-content-around align-items-center">
                    <button class="btn btn-sm btn-primary" @click="refreshList()">
                        <i class="fas fa-redo"></i> Làm mới
                    </button>
                    <button class="btn btn-sm btn-success" @click="goToAddProduct">
                        <i class="fas fa-plus"></i> Thêm mới
                    </button>
                    <button class="btn btn-sm btn-danger" @click="removeAllProducts">
                        <i class="fas fa-trash"></i> Xóa tất cả
                    </button>
                </div>
            </div>
            <div class="mt-3 col-md-4">
                <div v-if="activeProduct">
                    <h4>
                        Chi tiết Sản phẩm
                        <i class="fas fa-address-card"></i>
                    </h4>
                    <ProductCard :product="activeProduct" />
                    <router-link :to="{
                        name: 'product.edit',
                        params: { id: activeProduct._id },
                    }">
                        <span class="mt-2 badge badge-warning">
                            <i class="fas fa-edit"></i> Hiệu chỉnh</span>
                    </router-link>
                </div>
            </div>
            <div class="mt-3 col-md-4">
                <div v-if="activeProduct">
                    <img :src="activeProduct.img" alt="Ảnh Sản phẩm">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import ProductList from "@/components/ProductList.vue";
import ProductService from "@/services/product.service";
import { useAuthStore } from '@/store/auth';

export default {
    components: {
        ProductCard,
        InputSearch,
        ProductList,
    },
    data() {
        return {
            products: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        // Chuyển các đối tượng product thành chuỗi để tiện cho tìm kiếm.
        productStrings() {
            return this.products.map((product) => {
                const { name, category, description, price, quantity, img } = product;
                return [name, category, description, price, quantity, img].join("");
            });
        },
        // Trả về các product có chứa thông tin cần tìm kiếm.
        filteredProducts() {
            if (!this.searchText) return this.products;
            return this.products.filter((_product, index) =>
                this.productStrings[index].includes(this.searchText)
            );
        },
        activeProduct() {
            if (this.activeIndex < 0) return null;
            return this.filteredProducts[this.activeIndex];
        },
        filteredProductsCount() {
            return this.filteredProducts.length;
        },
        authStore() {
      return useAuthStore();
    },
    },
    methods: {
        async retrieveProducts() {
            try {
                this.products = await ProductService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveProducts();
            this.activeIndex = -1;
        },
        async removeAllProducts() {
            if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                try {
                    await ProductService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        goToAddProduct() {
            this.$router.push({ name: "product.add" });
        },
    },
    mounted() {
        this.refreshList();
    },

};
</script>  

<style scoped>
.page {
    text-align: left;

}
</style>