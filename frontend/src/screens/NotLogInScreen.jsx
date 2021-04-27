import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Heading, VStack } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'


const NotLogInScreen = () => {
    
    return (
        <VStack mt="30px">
            <Heading>You're not logged</Heading>
            <Image
              boxSize="400px"
              objectFit="cover"
              src="/images/notLogInImage.png"
              alt="NotLogInImage"
          />
              <Box w="400px">
                  <Link to='/login'>
              <Button colorScheme="blue" size="lg" isFullWidth='true'>
                 Login
              </Button>
              </Link>
              </Box>
        </VStack>
     )
}

export default NotLogInScreen
