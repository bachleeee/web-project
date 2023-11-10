const express = require("express");
const {
  findAll,
  createProduct,
  findOne,
  update,
  deleteProduct,
  deleteAllProducts,
} = require("../controllers/products.controller");

const router = express.Router();

router.route("/").get(findAll).delete(deleteAllProducts);
router.route("/").post(createProduct)
router.route("/:id").get(findOne).put(update).delete(deleteProduct);

module.exports = router;