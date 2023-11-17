<template>
    <div class="container mt-4">
        <h4>Thêm phẩm mới</h4>
        <ProductForm :product="product" @submit:product="createProduct" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ProductForm from "@/components/ProductForm.vue";
import ProductService from "@/services/product.service";
export default {
    components: {
        ProductForm,
    },
    data() {
        return {
            product: {
                name: '',
                description: '',
                price: '',
                quantity: '',
                category: '',
                img: '',
            },
            message: "",
        };
    },
    methods: {
        async createProduct(data) {
            try {
                await ProductService.create(data);
                this.message = "Sản phẩm được thêm thành công.";
                setTimeout(() => {
                    this.$router.push({ name: "product" });
                }, 2000);
            } catch (error) {
                console.log(error);
            }
        },

    },
};
</script>