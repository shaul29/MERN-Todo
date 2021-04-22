import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { Box, Flex, Heading, Spacer, Menu, MenuItem, MenuList, MenuButton, Text, HStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { FcTodoList } from 'react-icons/fc'
import {IconContext} from "react-icons"



const Navbar = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <Box bg= "#00A3C4" p="10px">
        <Flex>
        <Box p="2">
              <HStack>
              <IconContext.Provider value={{ style: {fontSize: '40px'}}}>
                  <FcTodoList />
                </IconContext.Provider>
                 <Heading size="md" color="white" >Todo App</Heading>
               </HStack>
        </Box>
        <Spacer />
        <Box p="2" mr="10px">
         {userInfo ? ( 
         <Menu>
            <MenuButton>
                <HStack>
                <Text fontSize="xl" fontWeight="bold" mt="5px">
                {userInfo.name}
                </Text><AiOutlineUser />
                </HStack>
                </MenuButton> 
              <MenuList>
                  <MenuItem bg="#00A3C4" onClick={logoutHandler}>Logout</MenuItem>
              </MenuList>
         </Menu>) : (
             <Box mt="8px">
             <Link to="/login" ><Text fontWeight="bold">Login</Text></Link>
             </Box>
         )}
        </Box>
      </Flex>
      </Box>
    )
}

export default Navbar


