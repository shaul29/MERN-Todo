import asyncHandler from 'express-async-handler'
import Todo from '../models/todoModel.js'


// @desc    Create a todo
// @route   POST /api/todo
// @access  public

const addTodo = asyncHandler(async (req, res) => {
    const {
     todo
    } = req.body
  
    if (todo.lenght === 0) {
      res.status(400)
      throw new Error('No order items')
      return;
    } else {
      const newTodo = new Todo({
        todo,
        user: req.user._id,
      })
  
      const createdTodo = await newTodo.save()
  
      res.status(201).json(createdTodo)
    }
  })

// @desc    Get logged in user todos
// @route   GET /api/todo
// @access  Private
const getMyTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find({ user: req.user._id }).sort([['createdAt', -1]])
    res.json(todos)
  })

// @desc    Toggle todo to be done or not
// @route   PUT /api/todo/:id
// @access  public
const updateTodoToCompleted = asyncHandler(async(req, res) => {
    const todo = await Todo.findById(req.params.id)
    if(todo) {
        todo.isCompleted = !todo.isCompleted

        const updatedTodo = await todo.save()

        res.json(updatedTodo)
    } else {
        res.status(404)
        throw new Error('Todo not found')
    }
    })

// @desc    Delete a todo
// @route   DELETE /api/todo/:id
// @access  public
const deleteTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id)

    if (todo) {
        await todo.remove()
        res.json({ message: 'Todo removed' })
    } else {
        res.status(404)
        throw new Error('Todo not found')
    }
})
  
  export {
      addTodo,
      getMyTodos,
      updateTodoToCompleted,
      deleteTodo
  }

