<template>
  <div class="container">
    <Form @submit="submitProduct" :validation-schema="productFormSchema">
      <div class="form-group">
        <label for="name">Tên sản phẩm</label>
        <Field name="name" type="text" class="form-control" v-model="productLocal.name" />
        <ErrorMessage name="name" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="category">Loại sản phẩm</label>
        <Field as="select" name="category" class="form-control" v-model="productLocal.category">
          <option value="">Chọn loại sản phẩm</option>
          <option value="coc-su">Cốc sứ</option>
          <option value="khung-anh">Khung ảnh</option>
          <option value="dong-ho">Đồng hồ</option>
          <option value="do-trang-tri">Đồ trang trí</option>
          <option value="gau-bong">Gấu bông</option>
        </Field>
        <ErrorMessage name="category" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="description">Mô tả</label>
        <Field name="description" type="text" class="form-control" v-model="productLocal.description" />
        <ErrorMessage name="description" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="price">Giá</label>
        <Field name="price" type="number" class="form-control" v-model="productLocal.price" />
        <ErrorMessage name="price" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="quantity">Số lượng</label>
        <Field name="quantity" type="number" class="form-control" v-model="productLocal.quantity" />
        <ErrorMessage name="quantity" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="img">Hình ảnh</label>
        <Field name="img" type="text" class="form-control" v-model="productLocal.img" />
        <ErrorMessage name="img" class="error-feedback" />
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Lưu</button>
        <button v-if="productLocal._id" type="button" class="ml-2 btn btn-danger" @click="deleteProduct">
          Xóa
        </button>
      </div>
    </Form>
  </div>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:product", "delete:product"],
  props: {
    product: { type: Object, required: true }
  },
  data() {
    const productFormSchema = yup.object().shape({
      name: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),

    });
    return {
      // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
      // productLocal để liên kết với các input trên form
      productLocal: this.product,
      productFormSchema,
      productTypes: [
      { value: 'coc-su', label: 'Cốc sứ' },
      { value: 'khung-anh', label: 'Khung ảnh' },
      { value: 'dong-ho', label: 'Đồng hồ' },
    ],
    };
  },
  methods: {
    submitProduct() {
      this.$emit("submit:product", this.productLocal);
    },
    deleteProduct() {
      this.$emit("delete:product", this.productLocal.id);
    },
    formattedCategory() {
    // Chuyển đổi giá trị loại sản phẩm nếu cần
    const selectedType = this.productTypes.find(type => type.value === this.productLocal.category);
    return selectedType ? selectedType.label : '';
  },
  },
};
</script>
<style scoped>
.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-control {
  width: 50%;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-check-input {
  margin-right: 5px;
}

.error-feedback {
  color: #dc3545;
  font-size: 14px;
  margin-top: 5px;
}

.btn {
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-danger {
  background-color: #dc3545;
  color: #fff;
}

.btn-danger:hover {
  background-color: #bd2130;
}
</style>