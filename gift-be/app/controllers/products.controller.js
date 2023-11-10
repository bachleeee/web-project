const ApiError = require("../api-error");
const productService = require("../services/product.service");

exports.createProduct = async (req, res, next) => {
  try {
    const result = await productService.create(req.body);
    res.send(result);
  } catch (error) {
    next(new ApiError("An error accurred while creating the product", 500));
  }
};

exports.findAll = async (req, res, next) => {
  let documents = [];
  try {
    const { name } = req.query;
    if (name) {
      documents = await productService.findByName(name);
    } else {
      documents = await productService.findAll();
    }
  } catch (error) {
    next(new ApiError("An error accurred while retrieving products", 500));
  }
  return res.send(documents);
};
exports.findOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const document = await productService.findById(id);
    if (!document) {
      return next(new ApiError(`Product with id ${id} not found`, 404));
    }
    return res.send(document);
  } catch (error) {
    next(new ApiError(`An error accurred while retrieving product ${id}`, 500));
  }
};
exports.update = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError("Update data cannot be empty", 400));
  }
  const { id } = req.params;
  const _data = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
  };
  try {
    const document = await productService.update(id, _data);
    if (!document) {
      return next(new ApiError(`Product with id ${id} not found`, 404));
    }
    return res.send(document);
  } catch (error) {
    next(new ApiError(`An error accurred while updating product ${id}`, 500));
  }
};

exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const document = await productService.deleteOne(id);
    if (!document) {
      return next(new ApiError(`Product with id ${id} not found`, 404));
    }
    return res.send({
      message: `Product with id ${id} was deleted successfully`,
    });
  } catch (error) {
    next(new ApiError(`An error accurred while deleting product ${id}`, 500));
  }
};

exports.deleteAllProducts = async (req, res, next) => {
  try {
    const result = await productService.deleteAll();
    return res.send({
      message: `${result.deletedCount} products were deleted successfully`,
    });
  } catch (error) {
    next(new ApiError("An error accurred while deleting products", 500));
  }
};

