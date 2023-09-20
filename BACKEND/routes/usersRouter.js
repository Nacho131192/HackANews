const express = require("express")
const usersRouter = express.Router()

const loginUser = require('../controller/users/loginUser.js');
const addUser = require("../controller/users/addUser.js");
const authUser = require("../middlewares/authUser.js");
const deleteUser = require("../controller/users/deleteUser.js");

//const authUser = require("../middlewares/authUser")

usersRouter.post("/", addUser);
usersRouter.post('/login', loginUser);

usersRouter.delete("/delete/:userDeleteId", authUser, deleteUser) 

module.exports = usersRouter

