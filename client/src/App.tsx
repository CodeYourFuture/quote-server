import React, { useState } from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Spinner,
  Center,
  VStack,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import useRandomQuoteFetcher from "./hooks/useRandomQuoteFetcher";
import DisplayQuote from "./components/DisplayQuote";

export const App = () => {
  const [searchTrigger, setSearchTrigger] = useState<boolean>(true)
  const searchTriggerHandler = () => setSearchTrigger(!searchTrigger);
  const {quote, isLoading, error} = useRandomQuoteFetcher(searchTrigger);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack h='100%'>
            {isLoading && <Center><Spinner size='lg' /></Center>}
            {error && <Box>{error}</Box>}
            {quote && <DisplayQuote quote={quote} searchTriggerHandler={searchTriggerHandler} />}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
