import {
    Box,
    Heading,
    VStack,
    HStack,
    SimpleGrid,
} from '@chakra-ui/react'
import BlogPost from "../components/BlogPost";
import styles from '../styles/Home.module.css'
import Simple from "../components/NavBar";

export default function Home() {
    const boxProperty = [{
        title: "Test Test",
        type: "Programming",
        bText: "Yesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyes",
        dateUploaded: "22 Oct 2021",
        msUNIX: 1634899831539,
        content: "blah blah blah blah blah",
    }, {
        title: "Test Test",
        type: "Programming",
        bText: "Yesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyes",
        dateUploaded: "22 Oct 2021",
        msUNIX: 1634899831539,
        content: "blah blah blah blah blah",
    }, {
        title: "Test Test",
        type: "Programming",
        bText: "Yesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyes",
        dateUploaded: "22 Oct 2021",
        msUNIX: 1634899831539,
        content: "blah blah blah blah blah",
    }, {
        title: "Test Test",
        type: "Programming",
        bText: "Yesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyes",
        dateUploaded: "22 Oct 2021",
        msUNIX: 1634899831539,
        content: "blah blah blah blah blah",
    }, {
        title: "Test Test",
        type: "Programming",
        bText: "Yesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyesyes",
        dateUploaded: "22 Oct 2021",
        msUNIX: 1634899831539,
        content: "blah blah blah blah blah",
    }]

    return (
        <Box>
            <Heading mb={50}>Ethan Chew's Blog</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
                {boxProperty.map((property) => (
                    <BlogPost key={property.title} boxProperty={property} />
                ))}
            </SimpleGrid>
        </Box>
    )
}
