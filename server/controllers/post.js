const verify = require("../middlewares/verifyToken");

module.exports.posts = (req, res) => {
  res.json({
    posts: [
      { title: "My first post", description: "hello this is description" },
      { title: "My first post", description: "hello this is description" },
      { title: "My first post", description: "hello this is description" },
      { title: "My first post", description: "hello this is description" },
      { title: "My first post", description: "hello this is description" },
    ],
  });
};
