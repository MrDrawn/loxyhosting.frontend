import React from 'react';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Text,
  Stack,
  SimpleGrid,
  Icon,
  Link,
  Badge,
  Button,
  Container,
} from '@chakra-ui/react';

export default function Plans() {
  const Feature = props => {
    return (
      <Flex align="center">
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color={useColorModeValue('brand.500', 'brand.300')}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.span mt={2} color={useColorModeValue('gray.700', 'gray.400')}>
            {props.children}
          </chakra.span>
        </Box>
      </Flex>
    );
  };
  return (
    <Container maxW={'container.xl'}>
      <Box marginTop={'-80px'} paddingBottom={20} data-aos="fade-down">
        <SimpleGrid
          columns={{base: 1, md: 3}}
          gap="24px"
          rounded="md"
          textAlign="left"
          marginTop={'-50px'}
        >
          <Box bg={useColorModeValue('white', 'gray.700')} pt={10} shadow="lg" rounded="md">
            <Flex direction="column">
              <Box px={10} pb={5}>
                <Badge
                  mb={1}
                  fontSize="xs"
                  letterSpacing="wide"
                  colorScheme={'gray'}
                  fontWeight="medium"
                  rounded="full"
                  px={4}
                  py={1}
                >
                  Plano 01
                </Badge>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={['bold', 'extrabold']}
                  color={useColorModeValue('gray.900', 'gray.50')}
                  lineHeight="tight"
                >
                  R$6,00
                  <chakra.span
                    fontSize="2xl"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.400')}
                  >
                    {' '}
                    /mês{' '}
                  </chakra.span>
                </Text>
              </Box>
              <Flex
                px={10}
                pt={5}
                pb={10}
                direction="column"
                bg={useColorModeValue('gray.50', 'gray.900')}
                roundedBottom="md"
              >
                <Stack mb={5} spacing={4}>
                  <Feature>2 GB de RAM</Feature>
                  <Feature>Sub-domínios</Feature>
                  <Feature>Banco de dados</Feature>
                  <Feature>Jogadores ilimitados</Feature>
                  <Feature>Plugins & Mods</Feature>
                  <Feature>Java, Bedrock, Forge e Magma</Feature>
                  <Feature>Painel Pterodactyl</Feature>
                  <Feature>Anti DDoS</Feature>
                  <Feature>Ping 100 ~ 150ms</Feature>
                </Stack>
                <Button
                  colorScheme={'purple'}
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="semibold"
                  rounded="md"
                  shadow="md"
                  mt={5}
                >
                  Comprar agora
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box bg={useColorModeValue('white', 'gray.700')} pt={10} shadow="lg" rounded="md">
            <Flex direction="column">
              <Box px={10} pb={5}>
                <Badge
                  mb={1}
                  fontSize="xs"
                  letterSpacing="wide"
                  colorScheme={'gray'}
                  fontWeight="medium"
                  rounded="full"
                  px={4}
                  py={1}
                >
                  Plano 02
                </Badge>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={['bold', 'extrabold']}
                  color={useColorModeValue('gray.900', 'gray.50')}
                  lineHeight="tight"
                >
                  R$12,00
                  <chakra.span
                    fontSize="2xl"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.400')}
                  >
                    {' '}
                    /mês{' '}
                  </chakra.span>
                </Text>
              </Box>
              <Flex
                px={10}
                pt={5}
                pb={10}
                direction="column"
                bg={useColorModeValue('gray.50', 'gray.900')}
                roundedBottom="md"
              >
                <Stack mb={5} spacing={4}>
                  <Feature>4 GB de RAM</Feature>
                  <Feature>Sub-domínios</Feature>
                  <Feature>Banco de dados</Feature>
                  <Feature>Jogadores ilimitados</Feature>
                  <Feature>Plugins & Mods</Feature>
                  <Feature>Java, Bedrock, Forge e Magma</Feature>
                  <Feature>Painel Pterodactyl</Feature>
                  <Feature>Anti DDoS</Feature>
                  <Feature>Ping 100 ~ 150ms</Feature>
                </Stack>
                <Button
                  colorScheme={'purple'}
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="semibold"
                  rounded="md"
                  shadow="md"
                  mt={5}
                >
                  Comprar agora
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box bg={useColorModeValue('white', 'gray.700')} pt={10} shadow="lg" rounded="md">
            <Flex direction="column">
              <Box px={10} pb={5}>
                <Badge
                  mb={1}
                  fontSize="xs"
                  letterSpacing="wide"
                  colorScheme={'gray'}
                  fontWeight="medium"
                  rounded="full"
                  px={4}
                  py={1}
                >
                  Plano 03
                </Badge>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={['bold', 'extrabold']}
                  color={useColorModeValue('gray.900', 'gray.50')}
                  lineHeight="tight"
                >
                  R$18,00
                  <chakra.span
                    fontSize="2xl"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.400')}
                  >
                    {' '}
                    /mês{' '}
                  </chakra.span>
                </Text>
              </Box>
              <Flex
                px={10}
                pt={5}
                pb={10}
                direction="column"
                bg={useColorModeValue('gray.50', 'gray.900')}
                roundedBottom="md"
              >
                <Stack mb={5} spacing={4}>
                  <Feature>6 GB de RAM</Feature>
                  <Feature>Sub-domínios</Feature>
                  <Feature>Banco de dados</Feature>
                  <Feature>Jogadores ilimitados</Feature>
                  <Feature>Plugins & Mods</Feature>
                  <Feature>Java, Bedrock, Forge e Magma</Feature>
                  <Feature>Painel Pterodactyl</Feature>
                  <Feature>Anti DDoS</Feature>
                  <Feature>Ping 100 ~ 150ms</Feature>
                </Stack>
                <Button
                  colorScheme={'purple'}
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="semibold"
                  rounded="md"
                  shadow="md"
                  mt={5}
                >
                  Comprar agora
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box bg={useColorModeValue('white', 'gray.700')} pt={10} shadow="lg" rounded="md">
            <Flex direction="column">
              <Box px={10} pb={5}>
                <Badge
                  mb={1}
                  fontSize="xs"
                  letterSpacing="wide"
                  colorScheme={'gray'}
                  fontWeight="medium"
                  rounded="full"
                  px={4}
                  py={1}
                >
                  Plano 04
                </Badge>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={['bold', 'extrabold']}
                  color={useColorModeValue('gray.900', 'gray.50')}
                  lineHeight="tight"
                >
                  R$24,00
                  <chakra.span
                    fontSize="2xl"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.400')}
                  >
                    {' '}
                    /mês{' '}
                  </chakra.span>
                </Text>
              </Box>
              <Flex
                px={10}
                pt={5}
                pb={10}
                direction="column"
                bg={useColorModeValue('gray.50', 'gray.900')}
                roundedBottom="md"
              >
                <Stack mb={5} spacing={4}>
                  <Feature>8 GB de RAM</Feature>
                  <Feature>Sub-domínios</Feature>
                  <Feature>Banco de dados</Feature>
                  <Feature>Jogadores ilimitados</Feature>
                  <Feature>Plugins & Mods</Feature>
                  <Feature>Java, Bedrock, Forge e Magma</Feature>
                  <Feature>Painel Pterodactyl</Feature>
                  <Feature>Anti DDoS</Feature>
                  <Feature>Ping 100 ~ 150ms</Feature>
                </Stack>
                <Button
                  colorScheme={'purple'}
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="semibold"
                  rounded="md"
                  shadow="md"
                  mt={5}
                >
                  Comprar agora
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box bg={useColorModeValue('white', 'gray.700')} pt={10} shadow="lg" rounded="md">
            <Flex direction="column">
              <Box px={10} pb={5}>
                <Badge
                  mb={1}
                  fontSize="xs"
                  letterSpacing="wide"
                  colorScheme={'gray'}
                  fontWeight="medium"
                  rounded="full"
                  px={4}
                  py={1}
                >
                  Plano 05
                </Badge>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={['bold', 'extrabold']}
                  color={useColorModeValue('gray.900', 'gray.50')}
                  lineHeight="tight"
                >
                  R$45,00
                  <chakra.span
                    fontSize="2xl"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.400')}
                  >
                    {' '}
                    /mês{' '}
                  </chakra.span>
                </Text>
              </Box>
              <Flex
                px={10}
                pt={5}
                pb={10}
                direction="column"
                bg={useColorModeValue('gray.50', 'gray.900')}
                roundedBottom="md"
              >
                <Stack mb={5} spacing={4}>
                  <Feature>16 GB de RAM</Feature>
                  <Feature>Sub-domínios</Feature>
                  <Feature>Banco de dados</Feature>
                  <Feature>Jogadores ilimitados</Feature>
                  <Feature>Plugins & Mods</Feature>
                  <Feature>Java, Bedrock, Forge e Magma</Feature>
                  <Feature>Painel Pterodactyl</Feature>
                  <Feature>Anti DDoS</Feature>
                  <Feature>Ping 100 ~ 150ms</Feature>
                </Stack>
                <Button
                  colorScheme={'purple'}
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="semibold"
                  rounded="md"
                  shadow="md"
                  mt={5}
                >
                  Comprar agora
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box bg={useColorModeValue('white', 'gray.700')} pt={10} shadow="lg" rounded="md">
            <Flex direction="column">
              <Box px={10} pb={5}>
                <Badge
                  mb={1}
                  fontSize="xs"
                  letterSpacing="wide"
                  colorScheme={'gray'}
                  fontWeight="medium"
                  rounded="full"
                  px={4}
                  py={1}
                >
                  Plano 06
                </Badge>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={['bold', 'extrabold']}
                  color={useColorModeValue('gray.900', 'gray.50')}
                  lineHeight="tight"
                >
                  R$68,00
                  <chakra.span
                    fontSize="2xl"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.400')}
                  >
                    {' '}
                    /mês{' '}
                  </chakra.span>
                </Text>
              </Box>
              <Flex
                px={10}
                pt={5}
                pb={10}
                direction="column"
                bg={useColorModeValue('gray.50', 'gray.900')}
                roundedBottom="md"
              >
                <Stack mb={5} spacing={4}>
                  <Feature>24 GB de RAM</Feature>
                  <Feature>Sub-domínios</Feature>
                  <Feature>Banco de dados</Feature>
                  <Feature>Jogadores ilimitados</Feature>
                  <Feature>Plugins & Mods</Feature>
                  <Feature>Java, Bedrock, Forge e Magma</Feature>
                  <Feature>Painel Pterodactyl</Feature>
                  <Feature>Anti DDoS</Feature>
                  <Feature>Ping 100 ~ 150ms</Feature>
                </Stack>
                <Button
                  colorScheme={'purple'}
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="semibold"
                  rounded="md"
                  shadow="md"
                  mt={5}
                >
                  Comprar agora
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box bg={useColorModeValue('white', 'gray.700')} pt={10} shadow="lg" rounded="md">
            <Flex direction="column">
              <Box px={10} pb={5}>
                <Badge
                  mb={1}
                  fontSize="xs"
                  letterSpacing="wide"
                  colorScheme={'gray'}
                  fontWeight="medium"
                  rounded="full"
                  px={4}
                  py={1}
                >
                  Plano 07
                </Badge>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={['bold', 'extrabold']}
                  color={useColorModeValue('gray.900', 'gray.50')}
                  lineHeight="tight"
                >
                  R$85,00
                  <chakra.span
                    fontSize="2xl"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.400')}
                  >
                    {' '}
                    /mês{' '}
                  </chakra.span>
                </Text>
              </Box>
              <Flex
                px={10}
                pt={5}
                pb={10}
                direction="column"
                bg={useColorModeValue('gray.50', 'gray.900')}
                roundedBottom="md"
              >
                <Stack mb={5} spacing={4}>
                  <Feature>32 GB de RAM</Feature>
                  <Feature>Sub-domínios</Feature>
                  <Feature>Banco de dados</Feature>
                  <Feature>Jogadores ilimitados</Feature>
                  <Feature>Plugins & Mods</Feature>
                  <Feature>Java, Bedrock, Forge e Magma</Feature>
                  <Feature>Painel Pterodactyl</Feature>
                  <Feature>Anti DDoS</Feature>
                  <Feature>Ping 100 ~ 150ms</Feature>
                </Stack>
                <Button
                  colorScheme={'purple'}
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="semibold"
                  rounded="md"
                  shadow="md"
                  mt={5}
                >
                  Comprar agora
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box bg={useColorModeValue('white', 'gray.700')} pt={10} shadow="lg" rounded="md">
            <Flex direction="column">
              <Box px={10} pb={5}>
                <Badge
                  mb={1}
                  fontSize="xs"
                  letterSpacing="wide"
                  colorScheme={'gray'}
                  fontWeight="medium"
                  rounded="full"
                  px={4}
                  py={1}
                >
                  Plano 08
                </Badge>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={['bold', 'extrabold']}
                  color={useColorModeValue('gray.900', 'gray.50')}
                  lineHeight="tight"
                >
                  R$150,00
                  <chakra.span
                    fontSize="2xl"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.400')}
                  >
                    {' '}
                    /mês{' '}
                  </chakra.span>
                </Text>
              </Box>
              <Flex
                px={10}
                pt={5}
                pb={10}
                direction="column"
                bg={useColorModeValue('gray.50', 'gray.900')}
                roundedBottom="md"
              >
                <Stack mb={5} spacing={4}>
                  <Feature>64 GB de RAM</Feature>
                  <Feature>Sub-domínios</Feature>
                  <Feature>Banco de dados</Feature>
                  <Feature>Jogadores ilimitados</Feature>
                  <Feature>Plugins & Mods</Feature>
                  <Feature>Java, Bedrock, Forge e Magma</Feature>
                  <Feature>Painel Pterodactyl</Feature>
                  <Feature>Anti DDoS</Feature>
                  <Feature>Ping 100 ~ 150ms</Feature>
                </Stack>
                <Button
                  colorScheme={'purple'}
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="semibold"
                  rounded="md"
                  shadow="md"
                  mt={5}
                >
                  Comprar agora
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box bg={useColorModeValue('white', 'gray.700')} pt={10} shadow="lg" rounded="md">
            <Flex direction="column">
              <Box px={10} pb={5}>
                <Badge
                  mb={1}
                  fontSize="xs"
                  letterSpacing="wide"
                  colorScheme={'gray'}
                  fontWeight="medium"
                  rounded="full"
                  px={4}
                  py={1}
                >
                  Plano 09
                </Badge>
                <Text
                  mb={2}
                  fontSize="5xl"
                  fontWeight={['bold', 'extrabold']}
                  color={useColorModeValue('gray.900', 'gray.50')}
                  lineHeight="tight"
                >
                  R$320,00
                  <chakra.span
                    fontSize="2xl"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.400')}
                  >
                    {' '}
                    /mês{' '}
                  </chakra.span>
                </Text>
              </Box>
              <Flex
                px={10}
                pt={5}
                pb={10}
                direction="column"
                bg={useColorModeValue('gray.50', 'gray.900')}
                roundedBottom="md"
              >
                <Stack mb={5} spacing={4}>
                  <Feature>128 GB de RAM</Feature>
                  <Feature>Sub-domínios</Feature>
                  <Feature>Banco de dados</Feature>
                  <Feature>Jogadores ilimitados</Feature>
                  <Feature>Plugins & Mods</Feature>
                  <Feature>Java, Bedrock, Forge e Magma</Feature>
                  <Feature>Painel Pterodactyl</Feature>
                  <Feature>Anti DDoS</Feature>
                  <Feature>Ping 100 ~ 150ms</Feature>
                </Stack>
                <Button
                  colorScheme={'purple'}
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="semibold"
                  rounded="md"
                  shadow="md"
                  mt={5}
                >
                  Comprar agora
                </Button>
              </Flex>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
}
