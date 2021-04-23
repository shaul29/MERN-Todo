import { VStack } from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Head from '../components/Head.component'
import InputTodo from '../components/InputTodo.component'
import TodoList from '../components/TodoList.component'

const HomeScreen = ({ history }) => {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo) {
           history.push('/newuser')
        }
    }, [history, userInfo])

        return (
            <VStack mt="50px">
               <Head />
               <InputTodo />
                <TodoList />
            </VStack>
            )
        
    }

export default HomeScreen
