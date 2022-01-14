import {Box, Container, Text, Button, Stack, useColorModeValue} from '@chakra-ui/react';

import {useRouter} from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <>
      <Box bg={'url("header.jpg")'} bgSize={'cover'}>
        <Box
          bg={useColorModeValue(
            'linear-gradient(to left, rgba(128, 90, 213, 0.5), rgba(68, 51, 122, 0.9))',
            'linear-gradient(to left, rgba(45, 55, 72, 0.5), rgba(26, 32, 44, 0.9))',
          )}
        >
          <Container maxW={'2xl'}>
            <Stack
              as={Box}
              textAlign={'center'}
              spacing={{base: 8, md: 5}}
              py={{base: 20, md: 40}}
              data-aos="flip-up"
            >
              <Text fontWeight={500} color={useColorModeValue('white', 'white')}>
                PREÇOS ACESSÍVEIS
              </Text>
              <Text
                color={useColorModeValue('white', 'white')}
                fontWeight={800}
                fontSize={{base: '2xl', sm: '4xl', md: '6xl'}}
                lineHeight={'110%'}
              >
                Seu projeto no lugar certo para crescer.
              </Text>
              <Text color={'rgb(255, 255, 255, 0.6)'}>
                Tenha um serviço conosco estável e conte com um suporte qualificado.
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
                  onClick={() => router.push('#why')}
                >
                  Por que a {process.env.name}?
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
