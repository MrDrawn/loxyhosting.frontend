import {Box, Container, Text, Button, Stack, useColorModeValue} from '@chakra-ui/react';
import {useRouter} from 'next/router';

import {FaArrowAltCircleDown} from 'react-icons/fa';

export default function Header() {
  const router = useRouter();

  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.700')}>
        <Container maxW={'2xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{base: 8, md: 5}}
            py={{base: 20, md: 20}}
            data-aos="flip-up"
          >
            <Text fontWeight={500} color={useColorModeValue('gray.800', 'white')}>
              HOSPEDAGEM DE MINECRAFT
            </Text>
            <Text
              color={useColorModeValue('gray.800', 'white')}
              fontWeight={800}
              fontSize={{base: '2xl', sm: '4xl', md: '6xl'}}
              lineHeight={'110%'}
            >
              Crie seu servidor de Minecraft com a {process.env.name}
            </Text>
            <Text color={useColorModeValue('rgb(26, 32, 44, 0.6)', 'rgb(255, 255, 255, 0.6)')}>
              Escolha o plano perfeito para você e seus jogadores.
            </Text>
            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}
            >
              <Button
                colorScheme={'purple'}
                rounded={'full'}
                px={6}
                onClick={() => router.push('#locations')}
              >
                <FaArrowAltCircleDown />
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
