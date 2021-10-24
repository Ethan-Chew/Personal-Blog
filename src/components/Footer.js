import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    Divider,
    useColorMode,
} from '@chakra-ui/react';

export default function Footer() {
    const { colorMode } = useColorMode()

    return (
        <Box>
            <Divider />
            <Container as={Stack} maxW={'6xl'} py={4} direction={{ base: 'column', md: 'row' }} spacing={4} justify={{ base: 'center', md: 'space-between' }} align={{ base: 'center', md: 'center' }}>
                <Text style={{ margin: "25px 0", textAlign: "center", fontSize: 13 }} color="">
                    Made with ♥&#xFE0E; by{" "}
                    <Link color={colorMode === "light" ? "#2B6CB0" : "#90CDF4"} href="https://www.ethanchew.com" target="_blank" rel="noreferrer">Ethan Chew</Link>{" "}
                    <br />
                    Open sourced on{" "}
                    <Link color={colorMode === "light" ? "#2B6CB0" : "#90CDF4"} href="https://github.com/Ethan-Chew/Personal-Blog" target="_blank" rel="noreferrer">GitHub</Link>
                    .{" "}
                    Last Updated: October 2021
                </Text>
            </Container>
        </Box>
    )
}