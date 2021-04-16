import express from 'express'
const router = express.Router()
import {
    addTodo,
    getMyTodos,
    updateTodoToCompleted,
    deleteTodo
} from '../controllers/todoController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addTodo)
router.route('/').get(protect, getMyTodos)
router.route('/:id').put(protect, updateTodoToCompleted)
router.route('/:id').delete(protect, deleteTodo)


export default router