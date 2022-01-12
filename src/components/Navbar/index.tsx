import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  useColorMode,
  Image,
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import {useRouter} from 'next/router';

export default function Navbar() {
  const {isOpen, onToggle} = useDisclosure();

  const {colorMode, toggleColorMode} = useColorMode();

  const router = useRouter();

  return (
    <Box>
      <Flex
        bg={useColorModeValue(
          'linear-gradient(to right, rgb(85, 60, 154), rgb(107, 70, 193))',
          'gray.800',
        )}
        color={useColorModeValue('gray.600', 'white')}
        minH={'100px'}
        py={{base: 2}}
        px={{base: 4}}
        align={'center'}
      >
        <Flex flex={{base: 1, md: 'auto'}} ml={{base: -2}} display={{base: 'flex', md: 'none'}}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          display={'flex'}
          alignItems={'center'}
          flex={{base: 1}}
          justify={{base: 'center', md: 'start'}}
        >
          <Image
            src={'logo-white.png'}
            cursor={'pointer'}
            userSelect={'none'}
            onDragStart={event => event.preventDefault()}
            onClick={() => router.push('/')}
          />

          <Flex display={{base: 'none', md: 'flex'}} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{base: 1, md: 0}} justify={'flex-end'} direction={'row'} spacing={6}>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Button
            display={{base: 'none', md: 'inline-flex'}}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            onClick={() => router.push('/')}
            colorScheme={'purple'}
          >
            área do cliente
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.200', 'gray.200');
  const linkHoverColor = useColorModeValue('white', 'white');
  const popoverContentBgColor = useColorModeValue('gray.100', 'gray.800');

  const router = useRouter();

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                onClick={() => router.push(navItem.href ?? '#')}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({label, href, subLabel}: NavItem) => {
  const router = useRouter();

  return (
    <Link
      onClick={() => router.push(href ?? '#')}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{bg: useColorModeValue('purple.500', 'gray.900')}}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text transition={'all .3s ease'} _groupHover={{color: 'white'}} fontWeight={500}>
            {label}
          </Text>
          <Text _groupHover={{color: 'white'}} fontSize={'sm'}>
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{opacity: '100%', transform: 'translateX(0)'}}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'white'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('purple.500', 'gray.800')} p={4} display={{md: 'none'}}>
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({label, children, href}: NavItem) => {
  const {isOpen, onToggle} = useDisclosure();

  const router = useRouter();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        onClick={() => router.push(href ?? '#')}
        justify={'space-between'}
        align={'center'}
        _hover={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.200', 'gray.200')}
          _hover={{color: 'white'}}
        >
          {label}
        </Text>
        {children && (
          <Icon
            color={useColorModeValue('gray.200', 'gray.200')}
            _hover={{color: 'white'}}
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{marginTop: '0!important'}}>
        <Stack mt={2} pl={4} align={'start'}>
          {children &&
            children.map(child => (
              <Link
                color={useColorModeValue('gray.200', 'gray.200')}
                _hover={{color: 'white'}}
                key={child.label}
                py={2}
                onClick={() => router.push(child.href ?? '#')}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'início',
    href: '/',
  },
  {
    label: 'hospedagens',
    children: [
      {
        label: 'Hospedagem de Minecraft',
        subLabel: 'Planos acessíveis com qualidade.',
        href: '/hosting/minecraft',
      },
      {
        label: 'Hospedagem de Bot',
        subLabel: 'Planos acessíveis com qualidade.',
        href: '/hosting/bot',
      },
    ],
  },
  {
    label: 'servidores',
    children: [
      {
        label: 'Servidores VPS',
        subLabel: 'Planos acessíveis com qualidade.',
        href: '/servers/vps',
      },
    ],
  },
  {
    label: 'sobre',
    href: '/about-us',
  },
];
