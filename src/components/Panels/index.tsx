import React from 'react';

import {Box, Button, Flex, Image, SimpleGrid, Text, useColorModeValue} from '@chakra-ui/react';

export default function Panels() {
  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.700')}
      p={10}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        bg={useColorModeValue('white', 'gray.800')}
        px={8}
        py={20}
        mx="auto"
        data-aos="zoom-in"
      >
        <SimpleGrid
          alignItems="start"
          columns={{base: 1, md: 2}}
          mb={24}
          spacingY={{base: 10, md: 32}}
          spacingX={{base: 10, md: 24}}
        >
          <Box>
            <Text
              mb={4}
              fontSize={{base: '2xl', md: '4xl'}}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{base: 'center', md: 'left'}}
              color={useColorModeValue('gray.900', 'gray.400')}
              lineHeight={{md: 'shorter'}}
            >
              Painel de Hospedagens
            </Text>
            <Text
              mb={5}
              textAlign={{base: 'center', sm: 'left'}}
              color={useColorModeValue('gray.600', 'gray.400')}
              fontSize={{md: 'lg'}}
            >
              Nosso painel de Hospedagem possui diversas funções para você gerenciar de forma
              simples e eficiente seu serviço.
            </Text>
            <Button
              w={{base: 'full', sm: 'auto'}}
              size="lg"
              bg={useColorModeValue('gray.900', 'gray.700')}
              _hover={{bg: useColorModeValue('gray.700', 'gray.600')}}
              color={useColorModeValue('gray.100', 'gray.200')}
              as="a"
            >
              Ler mais
            </Button>
          </Box>
          <Box width={'100%'} py={3} px={3} bg={useColorModeValue('gray.200', 'gray.700')}>
            <Image
              src={'control-panel-host.png'}
              borderRadius={'3px'}
              userSelect={'none'}
              onDragStart={event => event.preventDefault()}
              _hover={{
                transform: 'scale(1.01)',
              }}
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{base: 1, md: 2}}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{base: 10, md: 32}}
          spacingX={{base: 10, md: 24}}
        >
          <Box order={{base: 'none', md: 2}}>
            <Text
              mb={4}
              fontSize={{base: '2xl', md: '4xl'}}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{base: 'center', md: 'left'}}
              color={useColorModeValue('gray.900', 'gray.400')}
              lineHeight={{md: 'shorter'}}
            >
              Painel de VPS
            </Text>
            <Text
              mb={5}
              textAlign={{base: 'center', sm: 'left'}}
              color={useColorModeValue('gray.600', 'gray.400')}
              fontSize={{md: 'lg'}}
            >
              Nosso painel de VPS possui diversas funções para você gerenciar de forma simples e
              eficiente seu serviço.
            </Text>
            <Button
              w={{base: 'full', sm: 'auto'}}
              size="lg"
              bg={useColorModeValue('gray.900', 'gray.700')}
              _hover={{bg: useColorModeValue('gray.700', 'gray.600')}}
              color={useColorModeValue('gray.100', 'gray.200')}
              as="a"
            >
              Ler mais
            </Button>
          </Box>
          <Box width={'100%'} py={3} px={3} bg={useColorModeValue('gray.200', 'gray.700')}>
            <Image
              src={'control-panel-vps.png'}
              borderRadius={'3px'}
              userSelect={'none'}
              onDragStart={event => event.preventDefault()}
              _hover={{
                transform: 'scale(1.01)',
              }}
            />
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
