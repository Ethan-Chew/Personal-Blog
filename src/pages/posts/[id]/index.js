import {
    Box,
    Heading,
    Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from '/src/pages/api/firebase.js'

export default function blogPost({}) {
    const [boxProperty, setBoxProperty] = useState([])
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        onSnapshot(collection(db, "posts"), (data) => {
            setBoxProperty(data.docs.map((doc) => doc.data()))
        })
        console.log(boxProperty)
        // document.title = "Ethan Chew | " + boxProperty[id].title
    })

    return (
        <Box>
            <Heading>This is Post {Number(id) + 1}</Heading>
            {/*<Text>{boxProperty[id].content}</Text>*/}
        </Box>
    )
}