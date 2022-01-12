import React from 'react';
import {chakra, Box, useColorModeValue, Flex, Button, HStack} from '@chakra-ui/react';

export default function Support() {
  return (
    <Flex px={4} py={32} mx="auto">
      <Box w="full" mx="auto" w={{lg: 8 / 12, xl: 5 / 12}} data-aos="flip-up">
        <chakra.p
          mb={2}
          fontSize="xs"
          fontWeight="semibold"
          letterSpacing="wide"
          color="gray.400"
          textTransform="uppercase"
        >
          FALE COM UM ATENDENTE
        </chakra.p>
        <chakra.h1
          mb={3}
          fontSize={{base: '3xl', md: '4xl'}}
          fontWeight="bold"
          lineHeight="shorter"
          color={useColorModeValue('gray.900', 'white')}
        >
          Está com dúvidas?
        </chakra.h1>
        <chakra.p mb={5} color="gray.500" fontSize={{md: 'lg'}}>
          Entre em contato com um especialista e escolha o plano ideal para o seu projeto.
        </chakra.p>
        <HStack>
          <Button
            as="a"
            w={{base: 'full', sm: 'auto'}}
            mb={{base: 2, sm: 0}}
            size="md"
            cursor="pointer"
          >
            Contatar um especialista
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
}
