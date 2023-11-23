const { authenticateToken } = require('../middlewares/verifyToke');
const express = require("express");
const {
  findAll,
  createUser,
  findOne,
  update,
  deleteUser,
  deleteAllUsers,
  loginUser,
  logoutUser,
  userCart,
  getUserCart,
  deleteuserCart,
  createOrder
} = require("../controllers/users.controller");

const router = express.Router();

router.route("/").get(findAll).delete(deleteAllUsers);

router.route('/cart').post(authenticateToken,userCart);
router.route('/cart').get(authenticateToken,getUserCart);
router.route('/cart').delete(authenticateToken,deleteuserCart);

router.route('/order').post(authenticateToken,createOrder);

router.route('/register').post(createUser)
router.route('/login').post(loginUser)
router.route('/:id').get(findOne).put(update).delete(deleteUser);
router.route('/logout').post(authenticateToken, logoutUser);

module.exports = router;