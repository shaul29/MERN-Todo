import { Box, HStack, Spacer, StackDivider, Text, VStack } from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteTodo, listMyTodo, updateTodo} from '../actions/todoActions'
import Message from './Message.component'
import Loader from './Spinner.component'
import { FaTrash } from 'react-icons/fa'
import { TiInputChecked } from 'react-icons/ti'

const TodoList = () => {
    const dispatch = useDispatch()

    const todoList = useSelector((state) => state.todoListMy)
    const { loading, error, todos} = todoList

    const todoDeleted = useSelector((state) => state.todoDelete)
    const { error: deleteError } = todoDeleted

    const TodoUpdated = useSelector((state) => state.todoUpdate)
    const { error: updateError } = TodoUpdated


    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteTodo(id))
        }
    }

    const updateHandler = (id) => {
        dispatch(updateTodo(id))
    }

    useEffect(() => {
        dispatch(listMyTodo())
        
    }, [ dispatch])


    if(loading ) {
        return (
        <Loader />
        )
    }

    return (
        <Box p={5} shadow="md" borderWidth="1px" w="60vw">
            {error && <Message status='error' errorMessage={error} />}
            {deleteError && <Message status='error' errorMessage={deleteError} />}
            {updateError && <Message status='error' errorMessage={updateError} />}
          <VStack
               divider={<StackDivider borderColor="gray.200" />}
               spacing={4}
               align="stretch" 
               >  
               {todos.map((todo) => (
                   <Box h="40px" key={todo._id}>
                       <HStack mt="30px">
                       <TiInputChecked
                           color="green"
                           cursor="pointer"
                           size="28px"
                           onClick={() => updateHandler(todo._id)} mt="5px"  />
                       {todo.isCompleted ? <Text as="del" pl="15px">{todo.todo}</Text> : <Text pl="15px">{todo.todo}</Text>}
                       <Spacer />
                       <FaTrash 
                        color="red"
                        cursor="pointer" 
                        onClick={() => deleteHandler(todo._id)}/>
                       </HStack>
                   </Box>
               ))}
          </VStack>
       </Box>
            )
               }


export default TodoList
