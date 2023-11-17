<script>
import ProductService from "@/services/product.service";

export default {
    props: {
        products: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
        async deleteProduct(index, productId) {
            try {
                const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (!confirmDelete) {
                    return;
                }
                // Gọi API để xóa sản phẩm
                await ProductService.delete(productId);
                // Sau khi xóa thành công, cập nhật danh sách sản phẩm
                this.products.splice(index, 1);
                // Đặt lại activeIndex nếu cần
                this.$emit("update:activeIndex", -1);
            } catch (error) {
                console.error("Error deleting product:", error);
            }
        },
    }
};
</script>
<template>
    <ul class="list-group ">
        <li class="list-group-item" v-for="(product, index) in products" :key="product._id"
            :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)">
            {{ product.name }}
            <i class="fa-solid fa-trash delete-icon"
                @click="deleteProduct(index, product._id)"></i>
        </li>

    </ul>
</template>

<style>
.delete-icon {
    color: red;
    cursor: pointer;
    margin-left: 10px;
}

.list-group-item {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #b1b1b1;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>