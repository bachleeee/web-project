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
  logoutUser
} = require("../controllers/users.controller");

const router = express.Router();

router.route("/").get(findAll).delete(deleteAllUsers);

router.route("/register").post(createUser)
router.route("/login").post(loginUser)
router.route("/:id").get(findOne).put(update).delete(deleteUser);
router.post('/logout', authenticateToken, logoutUser);

module.exports = router;