<template>
    <div class="container">
        <div class="col-7 text-align-center;">
             <div class="d-flex justify-content-between align-items-center mb-3">
            <input v-model="searchTerm" type="text" class="form-control" placeholder="Tìm kiếm sản phẩm">
        </div>
        </div>
       
        <div class="row">
            <div class="col-12">

                <div class="products-list pb-5">
                    <ProductList :products="filteredProducts" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductService from "@/service/product.service";
import ProductList from '@/components/ProductList.vue';

export default {
    components: {
        ProductList,
    },
    data() {
        return {
            products: [],
            searchTerm: '',
        };
    },
    computed: {
        filteredProducts() {
            return this.products.filter(product =>
                product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        },
    },
    methods: {
        async getAllProduct() {
            try {
                this.products = await ProductService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        searchProducts() {
            
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
  