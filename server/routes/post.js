const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    posts: [
      { title: "My first post", description: "hello this is description" },
      { title: "My first post", description: "hello this is description" },
      { title: "My first post", description: "hello this is description" },
      { title: "My first post", description: "hello this is description" },
      { title: "My first post", description: "hello this is description" },
    ],
  });
});
module.exports = router;
