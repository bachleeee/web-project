<template>
    <div class="page py-4">
        <div class="container">
        <div class="row">
            <div class="col-3">
                <Filter />
            </div>
            <div class="col-9">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="btn-group">
                        <button class="btn btn-sm btn-outline-secondary" @click="sortByPrice('asc')">Giá thấp đến cao</button>
                        <button class="btn btn-sm btn-outline-secondary" @click="sortByPrice('desc')">Giá cao đến thấp</button>
                        <button class="btn btn-sm btn-outline-secondary" @click="sortBySale('desc')">Sách bán chạy</button>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <ProductList :products="sortedProducts" />
                </div>
                <div class="m-3 d-flex justify-content-around">
                    <button class="btn btn-sm" @click="decreasePage" :disabled="currentPage === 1">
                        <i class="fa-solid fa-arrow-right fa-rotate-180"></i>
                    </button>
                    <div>
                        <h5>{{ currentPage }} </h5>
                    </div>
                    <button class="btn btn-sm" @click="increasePage">
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import ProductService from "@/service/product.service";
import ProductList from '@/components/ProductList.vue';
import Filter from '@/components/Filter.vue';

export default {
    components: {
        ProductList,
        Filter,
    },
    data() {
        return {
            products: [],
            sortedProducts: [],
            searchTerm: '',
            currentPage: 1,
        };
    },
    watch: {
        currentPage: {
            immediate: true,
            handler(newPage) {
                this.getAllProduct();
            },
        },
    },
    methods: {
        increasePage() {
            this.currentPage++;
            this.getAllProduct();
        },
        decreasePage() {
            this.currentPage--;
            this.getAllProduct();
        },
        async getAllProduct() {
            try {
                const limit = 12;
                this.products = await ProductService.getAllCat('van-hoc', this.currentPage, limit);
                this.sortByPrice('asc'); // Sắp xếp mặc định khi lấy dữ liệu mới
            } catch (error) {
                console.log(error);
            }
        },
        sortByPrice(order) {
            this.sortedProducts = [...this.products].sort((a, b) => {
                const priceA = a.price;
                const priceB = b.price;
                return order === 'asc' ? priceA - priceB : priceB - priceA;
            });
        },
        sortBySale(order) {
            this.sortedProducts = [...this.products].sort((a, b) => {
                const quantityA = a.quantity;
                const quantityB = b.quantity;
                return order === 'asc' ? quantityA - quantityB : quantityB - quantityA;
            });
        },
    },
    mounted() {
        this.getAllProduct();
    },
};
</script>
  

<style scoped>
.container {
    padding-top: 20px;
    background-color: white;
    border-radius: 10px;
}
.container {
    padding-top: 20px;
}

.filter-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
}

.filter-title {
    color: red;
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.filter-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.filter-card ul li {
    padding: 8px 0;
    cursor: pointer;
    color: #555;
}

.filter-card ul li:hover {
    color: #000;
}

.sub-title {
    color: #555;
    margin-bottom: 10px;
}

.form-check {
    margin-bottom: 8px;
}

.d-flex {
    display: flex;
    justify-content: space-between;
}

.align-items-center {
    align-items: center;
}
</style>
  