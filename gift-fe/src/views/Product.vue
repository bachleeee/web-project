<template>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <Filter :products="products" />
            </div>
            <div class="col-9">
                <div class="filter-sort-grid">
                    <div class="d-flex justify-content-end align-items-center">
                        <div class="d-flex align-items-center gap-10">
                            <div class="mb-0">Sort by</div>
                            <select name="" id="" class="form-control form-select">

                            </select>
                        </div>
                        <div class="d-flex"></div>
                    </div>
                </div>
                <div class="products-list pb-5">
                    <ProductList :products="products" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Filter from "@/components/Filter.vue";
import ProductService from "@/service/product.service";
import ProductList from '@/components/ProductList.vue';
export default {
    components: {
        ProductList,
        Filter,
    },
    data() {
        return {
            products: [],
        };
    },
    methods: {
        async getAllProduct() {
            try {
                this.products = await ProductService.getAll();
            } catch (error) {
                console.log(error);
            }
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
  