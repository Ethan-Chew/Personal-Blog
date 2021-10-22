import '../styles/globals.css'
import { ChakraProvider, extendTheme, VStack } from "@chakra-ui/react"
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";

// All Pages
const theme = extendTheme({
    config: {
        useSystemColorMode: true,
        initialColorMode: "dark"
    }
});

function App({ Component, pageProps }) {
  return(
      <ChakraProvider theme={theme}>
        <NavBar />
        <VStack spacing={50} mt={5}>
            <Component {...pageProps} />
            <Footer />
        </VStack>
      </ChakraProvider>
  )
}

export default App