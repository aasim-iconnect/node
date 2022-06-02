const { register } = require("../controllers/register");
const { login } = require("../controllers/login");
const { posts } = require("../controllers/post");
const { verifyToken } = require("../middlewares/verifyToken");
const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/posts", [verifyToken, posts]);

module.exports = router;
