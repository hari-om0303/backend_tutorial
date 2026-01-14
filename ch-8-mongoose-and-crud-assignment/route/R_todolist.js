const express = require('express');

const todolistController = require('../controller/C_todolist');

const router = express.Router();

router
    .post('/', todolistController.create)
    .post('/many', todolistController.createMany)
    .get('/:id', todolistController.getTodolist)
    .get('/', todolistController.getAllTodolists)
    .put('/:id', todolistController.updateTodolist)
    .patch('/:id', todolistController.updateTodolist2)
    .delete('/:id', todolistController.deleteTodolist)

exports.router = router;


