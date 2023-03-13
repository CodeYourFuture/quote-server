import { Button, Heading, useColorModeValue, VStack } from '@chakra-ui/react'
import Quote from '../entities/Quote'

type Props = {
  quote: Quote;
  searchTriggerHandler: () => void;
}

const DisplayQuote = ({ quote, searchTriggerHandler }: Props) => {
  return (
    <VStack shadow='2xl' w='80%' px='8' mx='auto' py='6' justifyContent='center' alignItems='center'>
      <Heading as='h1'>"{quote.quote}"</Heading>
      <Heading as='h3' size='lg'>{quote.author}</Heading>
      <Button
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            onClick={searchTriggerHandler}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Get Another Quote
          </Button>
    </VStack>
  )
}

export default DisplayQuote