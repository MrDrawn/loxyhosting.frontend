import {ReactNode} from 'react';

import {
  Box,
  Container,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {useRouter} from 'next/router';

const ListHeader = ({children}: {children: ReactNode}) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const router = useRouter();

  return (
    <Box
      bg={useColorModeValue(
        'linear-gradient(to right, rgb(85, 60, 154), rgb(107, 70, 193))',
        'gray.700',
      )}
      color={useColorModeValue('white', 'white')}
    >
      <Container as={Stack} maxW={'6xl'} py={20}>
        <SimpleGrid templateColumns={{sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr'}} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Image
                src={'logo-white.png'}
                cursor={'pointer'}
                userSelect={'none'}
                onDragStart={event => event.preventDefault()}
                onClick={() => router.push('/')}
                alt={process.env.name}
              />
            </Box>
            <Text fontSize={'sm'}>
              © {new Date().getFullYear()} {process.env.name}. Todos os direitos reservados.
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Serviços</ListHeader>
            <Link onClick={() => router.push('/hosting/minecraft')}>Host de Minecraft</Link>
            <Link onClick={() => router.push('/hosting/bots')}>Host de Bots</Link>
            <Link onClick={() => router.push('/servers/vps')}>Servidores VPS</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Empresa</ListHeader>
            <Link onClick={() => router.push('/about')}>Sobre</Link>
            <Link onClick={() => router.push('/')}>Discord</Link>
            <Link onClick={() => router.push('/')}>Contato</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Suporte</ListHeader>
            <Link onClick={() => router.push('/')}>Abrir ticket</Link>
            <Link onClick={() => router.push('/')}>Termos de Serviços</Link>
            <Link onClick={() => router.push('/')}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Siga-nós</ListHeader>
            <Link onClick={() => router.push('/')}>Facebook</Link>
            <Link onClick={() => router.push('/')}>Twitter</Link>
            <Link onClick={() => router.push('/')}>Instagram</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
