<script>
export default {
    props: {
        product: { type: Object, required: true },
    },
};
</script>
<template>
    <div>
        <div class="p-1">
            <strong>Tên:</strong>
            {{ product.name }}
        </div>
        <div class="p-1">
            <strong>Loại</strong>
            {{ product.category }}
        </div>
        <div class="p-1">
            <strong>Giá</strong>
            {{ product.price }}
        </div>
        <div class="p-1">
            <strong>Mô tả</strong>
            {{ product.description }}
        </div>
        <div class="p-1">
            <strong>Số lượng</strong>
            {{ product.quantity }}
        </div>
        
    </div>
</template>