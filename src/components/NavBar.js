import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import { 
  HamburgerIcon, 
  CloseIcon, 
  MoonIcon, 
  SunIcon, 
} from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];
const Pages = [
  {
    id: "Home", 
    href: "/"
  }]
  // , {
  //   id: "Website",
  //   href: "www.ethanchew.com"
  // }, {
  //   id: "Profile",
  //   href: "profile.ethanchew.com"
  // }]

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={children.href} isExternal >
    {children.id}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          {colorMode === 'light' ? <Image src="/Name Logo.png" alt="Ethan Chew" width={200} borderRadius="md" /> : <Image src="/Name Logo L.png" alt="Ethan Chew" width={200} borderRadius="md" />}
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {Pages.map((page) => (
              <NavLink key={page.id}>{page}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Pages.map((page) => (
              <NavLink key={page.id}>{page}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}