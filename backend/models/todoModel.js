import mongoose from 'mongoose'

const todoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    todo: {
        type: String,
        required: [true, 'Please add a Task'],
        unique: true,
        maxlength: [200, 'Task cannot be more than 200 characters']
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo