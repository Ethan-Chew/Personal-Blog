import { 
    Box,
    Image,
    VStack,
    HStack,
    Heading,
    Badge,
    Text,
} from "@chakra-ui/react"

export default function BlogPost({boxProperty}) {
    const unixWeek = 604800000

    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <VStack alignItems="left" m={[3, 3, 3, 3]} spacing={2}>
                <VStack alignItems="left" spacing={0}>
                    <HStack>
                        <Text fontSize="2xl"><b>{boxProperty.title}</b></Text>
                        {(Number(new Date().getTime()) - boxProperty.msUNIX < unixWeek) ?
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
        </Box>
    )
}