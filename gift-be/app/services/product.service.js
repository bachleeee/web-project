const { ObjectId } = require("mongodb");

class ProductService {
  constructor(databaseSetvices) {
    this.databaseSetvices = databaseSetvices;
  }
  extractProductData(product) {
    const _product = { ...product };

    // Remove undifined fileds
    Object.keys(_product).forEach(
      (key) => _product[key] === undefined && delete _product[key]
    );
    return _product;
  }
  async create(data) {
    const product = this.extractProductData(data);
    const result = await this.databaseSetvices.products.findOneAndUpdate(
      product,
      {
        $set: { img: "" },
      },
      {
        upsert: true,
        returnDocument: "after",
      }
    );
    return result;
  }

  async findAll() {
    try {
      const products = await this.databaseSetvices.products.find().toArray();
      return products;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByName(name) {
    try {
      const products = await this.databaseSetvices.products
        .find({
          name: {
            $regex: new RegExp(name),
            $options: "i",
          },
        })
        .toArray();
      return products;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findById(id) {
    try {
      const product = await this.databaseSetvices.products.findOne({
        _id: new ObjectId(id),
      });
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }
  async update(id, updateProduct) {
    const filter ={
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    }
    const update = this.extractProductData(updateProduct);
    const options = {
      returnDocument: "after",
    };

    try {
      const product = await this.databaseSetvices.products.findOneAndUpdate(
        filter,
        {
          $set: update,
        },
        options
      );
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }
  async deleteOne(id) {
    try {
      const product = await this.databaseSetvices.products.findOneAndDelete({
        _id: new ObjectId(id),
      });
      return product;
    } catch (error) {
      throw new Error(error);
    }
  }
  async deleteAll() {
    try {
      const products = await this.databaseSetvices.products.deleteMany();
      return products;
    } catch (error) {
      throw new Error(error);
    }
  }

}
const databaseSetvices = require("../utils/mongodb.util");
const productService = new ProductService(databaseSetvices);
module.exports = productService;