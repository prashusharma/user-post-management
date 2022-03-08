const express = require("express");
const postController = require("../Controller/postController");
const userController = require("../Controller/userController");
const route = express.Router();
const userAuth = require("../middleware/userAuth")

route.get("/", (req, res) => {
    res.send("Hello Welcome to Home page")
})

//User's routes
route.get("/user", userController.login)
route.post("/user", userController.create)
route.put("/user", userController.update)
route.delete("/user", userController.delete)

//Post's routes
route.get("/post", userAuth, postController.getpost);
route.post("/post",  userAuth, postController.create);
route.put("/post", userAuth, postController.update);
route.delete("/post", userAuth, postController.delete);

module.exports = route;