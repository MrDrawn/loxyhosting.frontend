import {Box, Container, Text, Stack, useColorModeValue} from '@chakra-ui/react';

export default function Header() {
  return (
    <>
      <Box bg={'url("about.jpg")'} bgSize={'cover'}>
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
                SOBRE
              </Text>
              <Text
                color={useColorModeValue('white', 'white')}
                fontWeight={800}
                fontSize={{base: '2xl', sm: '4xl', md: '6xl'}}
                lineHeight={'110%'}
              >
                CONHEÇA MAIS A NOSSA EMPRESA
              </Text>
              <Text color={'rgb(255, 255, 255, 0.6)'}>
                Fornecemos serviços de Hospedagem de alta qualidade que oferece grande capacidade de
                processamento e a melhor latência em um nível incomparável.
              </Text>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
