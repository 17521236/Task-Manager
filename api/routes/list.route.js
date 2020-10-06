const express = require('express')
const router = express.Router();
const listController = require('../controllers/list.controller')
const taskController = require('../controllers/task.controller')

//list
router.get('', listController.getAll);
router.get('/:id', listController.getOne);
router.post('', listController.create);
router.put('/:id', listController.update);
router.delete('/:id', listController.delete);

// task
router.get('/:listId/tasks', taskController.getAll);
router.get('/:listId/tasks/:id', taskController.getOne);
router.post('/:listId/tasks', taskController.create);
router.put('/:listId/tasks/:id', taskController.update);
router.delete('/:listId/tasks/:id', taskController.delete);

module.exports = router;