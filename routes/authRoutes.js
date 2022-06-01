const router = require("express").Router;
const {
  signUpGetController,
  signUpPostController,
  loginGetController,
  loginPostcontroller,
  signOutController,
} = require("../controllers/authController");

router.get("/singup", signUpGetController);
router.post("/signup", signUpPostController);
router.get("/login", loginGetController);
router.post("/login", loginPostcontroller);
router.get("/logout", signOutController);

module.exports = router;
