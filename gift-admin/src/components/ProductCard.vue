<script>
export default {
  props: {
    product: { type: Object, required: true },
  },
  methods: {
    formatCategory(category) {
      switch (category) {
        case 'coc-su':
          return 'Cốc sứ';
        case 'khung-anh':
          return 'Khung ảnh';
        case 'dong-ho':
          return 'Đồng hồ';
        case 'do-trang-tri':
          return 'Đồ trang trí';
        case 'gau-bong':
          return 'Gấu bông';
        default:
          return category;
      }
    },
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
      {{ formatCategory(product.category) }}
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
