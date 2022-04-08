const express = require('express');
const router = express.Router();
const controller = require("../controllers/todos.controller");

router.get("/", controller.getTodos);

router.post("/", controller.addTodo)

router.patch("/", controller.updateTodo)

router.delete("/", controller.deleteTodo)

module.exports = router;