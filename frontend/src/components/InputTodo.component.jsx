import React, { useState } from 'react'
import { Input, InputGroup, InputRightElement} from '@chakra-ui/input'
import { Box } from '@chakra-ui/layout'
import { AiOutlineSend} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo } from '../actions/todoActions'
import Message from './Message.component'


const InputTodo = () => {
    const [newTodo, setTodo] = useState('')

    const dispatch = useDispatch()

    const todoCreate = useSelector((state) => state.todoCreate)
    const { error, success } = todoCreate

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createTodo({todo:newTodo}))
        if(success) {
            setTodo('')
        }
    }

    return (
        <Box p={5} shadow="md" borderWidth="1px" w="60vw">
            {error && <Message status='error' errorMessage={error} />}
            <Box as="form" onSubmit={submitHandler}>
            <InputGroup>
            <Input
             placeholder="Add Task" 
             value={newTodo}
             onChange={(e) => setTodo(e.target.value)} />
            <InputRightElement width="4.5rem">
                <AiOutlineSend type='submit' cursor="pointer" onClick={submitHandler}/>
            </InputRightElement>
            </InputGroup>
           </Box>
        </Box>
    )
}

export default InputTodo
