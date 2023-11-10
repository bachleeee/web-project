const { ObjectId } = require("mongodb");

class UserService {
  constructor(databaseSetvices) {
    this.databaseSetvices = databaseSetvices;
  }
  extractUserData(user) {
    const _user = { ...user };

    // Remove undifined fileds
    Object.keys(_user).forEach(
      (key) => _user[key] === undefined && delete _user[key]
    );
    return _user;
  }
  async create(data) {
    const user = this.extractUserData(data);
    const result = await this.databaseSetvices.users.findOneAndUpdate(
      user,
      {
        $setOnInsert: { role: "user" },
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
      const users = await this.databaseSetvices.users.find().toArray();
      return users;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByName(name) {
    try {
      const users = await this.databaseSetvices.users
        .find({
          name: {
            $regex: new RegExp(name),
            $options: "i",
          },
        })
        .toArray();
      return users;
    } catch (error) {
      throw new Error(error);
    }
  }
  
  async findById(id) {
    try {
      const user = await this.databaseSetvices.users.findOne({
        _id: new ObjectId(id),
      });
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
  async update(id, updateUser) {
    const filter ={
      _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
    }
    const update = this.extractUserData(updateUser);
    const options = {
      returnDocument: "after",
    };

    try {
      const user = await this.databaseSetvices.users.findOneAndUpdate(
        filter,
        {
          $set: update,
        },
        options
      );
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
  async deleteOne(id) {
    try {
      const user = await this.databaseSetvices.users.findOneAndDelete({
        _id: new ObjectId(id),
      });
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
  async deleteAll() {
    try {
      const users = await this.databaseSetvices.users.deleteMany();
      return users;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findUser(email) {
    try {
      const user = await this.databaseSetvices.users.findOne({ email });
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}
const databaseSetvices = require("../utils/mongodb.util");
const userService = new UserService(databaseSetvices);
module.exports = userService;