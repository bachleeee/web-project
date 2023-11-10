const ApiError = require("../api-error");
const userService = require("../services/user.service");

exports.createUser = async (req, res, next) => {
  const existingUser = await userService.findUser(req.body.email);

  if (existingUser) {
    return next(new ApiError("User already exists", 400));
  }

  if (!req.body?.name) {
    return next(new ApiError("Name cannot be empty", 400));
  }

  try {
    const result = await userService.create(req.body);
    res.send(result);
  } catch (error) {
    next(new ApiError("An error occurred while creating the user", 500));
  }
};


exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await userService.findUser(email);

  if (!user) {
    return next(new ApiError("User not found", 401));
  }
  
  if (user.password !== password) {
    return next(new ApiError("Invalid password", 401));
  }

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
  });
};

exports.findAll = async (req, res, next) => {
  let documents = [];
  try {
    const { name } = req.query;
    if (name) {
      documents = await userService.findByName(name);
    } else {
      documents = await userService.findAll();
    }
  } catch (error) {
    next(new ApiError("An error accurred while retrieving users", 500));
  }
  return res.send(documents);
};
exports.findOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const document = await userService.findById(id);
    if (!document) {
      return next(new ApiError(`User with id ${id} not found`, 404));
    }
    return res.send(document);
  } catch (error) {
    next(new ApiError(`An error accurred while retrieving user ${id}`, 500));
  }
};
exports.update = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new ApiError("Update data cannot be empty", 400));
  }
  const { id } = req.params;
  const _data = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  };
  try {
    const document = await userService.update(id, _data);
    if (!document) {
      return next(new ApiError(`User with id ${id} not found`, 404));
    }
    return res.send(document);
  } catch (error) {
    next(new ApiError(`An error accurred while updating user ${id}`, 500));
  }
};


exports.deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const document = await userService.deleteOne(id);
    if (!document) {
      return next(new ApiError(`User with id ${id} not found`, 404));
    }
    return res.send({
      message: `User with id ${id} was deleted successfully`,
    });
  } catch (error) {
    next(new ApiError(`An error accurred while deleting user ${id}`, 500));
  }
};

exports.deleteAllUsers = async (req, res, next) => {
  try {
    const result = await userService.deleteAll();
    return res.send({
      message: `${result.deletedCount} users were deleted successfully`,
    });
  } catch (error) {
    next(new ApiError("An error accurred while deleting users", 500));
  }
};

exports.logout = async (req, res, next) => {
  // Có thể có các bước xóa token hoặc phiên đăng nhập khác ở đây
  // Ví dụ: Xóa token khỏi cơ sở dữ liệu hoặc danh sách token đã phát hành

  // Sau khi xóa token, có thể gửi phản hồi về thành công
  res.json({ message: "Logout successful" });
};


