import { Box, Center, Text } from '@chakra-ui/layout'
import React from 'react'

const Head = () => {
    return (
     <Box p={5} shadow="md" borderWidth="1px" w="60vw">
           <Center>
            <Text fontWeight="bold">MY TASKS</Text>
            </Center> 
        </Box>
    )
}

export default Head
