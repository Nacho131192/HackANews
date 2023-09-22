const express = require("express")
const usersRouter = express.Router()

const loginUser = require('../controller/users/loginUser.js');
const addUser = require("../controller/users/addUser.js");
const authUser = require("../middlewares/authUser.js");
const deleteUser = require("../controller/users/deleteUser.js");
const updateUser = require("../controller/users/updateUser.js");
const getUser = require("../controller/users/getUser.js");

usersRouter.post("/", addUser);
usersRouter.post('/login', loginUser);
usersRouter.get("/dataUser/:userId", authUser, getUser)
usersRouter.delete("/delete/:userDeleteId", authUser, deleteUser)
usersRouter.post('/update/:userId', authUser, updateUser)
module.exports = usersRouter

