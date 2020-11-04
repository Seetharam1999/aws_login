const router = require("express").Router();
const { checkToken } = require("./users/token");
const {
  createUser,
  login,

} = require("./users/user.controller");
router.post("/register", createUser);
router.post("/login", login);

module.exports = router;
