import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    Badge,
    useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from '/src/pages/api/firebase.js'

export default function blogPost({}) {
    const [boxProperty, setBoxProperty] = useState([])
    const router = useRouter()
    const { id } = router.query
    const currentPost = Object(boxProperty[id])
    const unixWeek = 604800000

    useEffect(() => {
        onSnapshot(collection(db, "posts"), (data) => {
            setBoxProperty(data.docs.map((doc) => doc.data()))
        })
        document.title = "Ethan Chew | " + currentPost.title
    })
    return (
        <Box>
            <VStack alignItems="left" maxW={900} spacing={10}>
                <VStack spacing={0} alignItems="left">
                    <HStack>
                        <Heading>{currentPost.title}</Heading>
                        {(Number(new Date().getTime()) - Number(currentPost.msUnix) < unixWeek) ?
                            <Badge ml="1" colorScheme="green">
                                New
                            </Badge>
                            :
                            <></>
                        }
                    </HStack>
                    <HStack spacing={5}>
                        <Text><b>Date Published: </b> {currentPost.dateUploaded}</Text>
                        <Text px={2} py={1} rounded="md" backgroundColor={useColorModeValue('gray.200', 'gray.700')}>{currentPost.type}</Text>
                    </HStack>
                </VStack>

                <Text>{currentPost.content}</Text>
            </VStack>
        </Box>
    )
}