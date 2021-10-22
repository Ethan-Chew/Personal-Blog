import { 
    Box,
    Image,
    VStack,
    HStack,
    Heading,
    Badge,
    Text,
    LinkBox,
} from "@chakra-ui/react"
import Link from 'next/link'

export default function BlogPost({boxProperty}) {
    const unixWeek = 604800000

    return (
        <LinkBox as="article" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Link href="/posts/[id]" as={`/posts/${boxProperty.id}`}>
                <VStack alignItems="left" m={[3, 3, 3, 3]} spacing={2}>
                    <VStack alignItems="left" spacing={0}>
                        <HStack>
                            <Text fontSize="2xl"><b>{boxProperty.title}</b></Text>
                            {(Number(new Date().getTime()) - Number(boxProperty.msUnix) < unixWeek) ?
                                <Badge ml="1" colorScheme="green">
                                    New
                                </Badge>
                                :
                                <></>
                            }
                        </HStack>
                        <Text>{boxProperty.dateUploaded}</Text>
                    </VStack>
                    <Text>{boxProperty.bText}</Text>
                </VStack>
            </Link>
        </LinkBox>
    )
}