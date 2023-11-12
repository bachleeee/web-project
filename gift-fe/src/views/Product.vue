<template>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <div class="filter-card mb-3">
                    <h3 class="filter-title">Tất cả sản phẩm</h3>
                    <ul>
                        <li>Cốc sứ</li>
                        <li>Khung ảnh</li>
                        <li>Gấu bông</li>
                        <li>Đồng hồ</li>
                        <li>Đồ trang trí</li>
                    </ul>
                </div>
                <div class="filter-card mb-3">
                    <h3 class="filter-title">Lọc</h3>
                    <div>
                        <hr>
                        <h5 class="sub-title">Tình trạng</h5>
                        <div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" name="" id="">
                                <label for="" class="form-check-label">Còn hàng</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" name="" id="">
                                <label for="" class="form-check-label">Hết hàng</label>
                            </div>
                        </div>
                        <hr>
                        <h5 class="sub-title">Giá</h5>
                        <div class="d-flex align-items-center">
                            <form class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInputValue" placeholder="From">
                            </form>
                            <form class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInputValue" placeholder="To">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-9">
                <div class="filter-sort-grid">
                    <div class="d-flex justify-content-end align-items-center">
                        <div class="d-flex align-items-center gap-10">
                            <div class="mb-0">Sort by</div>
                            <select name="" id="" class="form-control form-select">
                                <option value="price-ascending">Price: High-Low</option>
                                <option value="price-descending">Price: Low-High</option>
                                <option value="created-ascending">Date: Old-New</option>
                                <option value="created-descending">Date: New-Old</option>
                            </select>
                        </div>
                        <div class="d-flex"></div>
                    </div>
                </div>
                <div class="products-list pb-5">
                    <ProductList></ProductList>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import ProductList from '../components/ProductList.vue';
export default {
    components: {
        ProductList
    }
}

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
  