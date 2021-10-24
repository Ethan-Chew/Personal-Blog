import {
    Box,
    Heading,
    VStack,
    Text,
    SimpleGrid,
} from '@chakra-ui/react'
import BlogPost from "../components/BlogPost";
import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from './api/firebase.js'

export default function Home() {
    const [boxProperty, setBoxProperty] = useState([])

    useEffect(() => {
        document.title = "Ethan Chew | Blog"
        onSnapshot(collection(db, "posts"), (data) => {
            setBoxProperty(data.docs.map((doc) => doc.data()))
        })
    }, [])

    return (
        <Box>
            <Heading mb={50}>Ethan Chew's Blog</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
                {(boxProperty.length === 0) ? <Text>No posts at the moment! Check back soon!</Text> :
                    boxProperty.map((property) => (
                        <BlogPost key={property.title} boxProperty={property} />
                    ))
                }
            </SimpleGrid>
        </Box>
    )
}
