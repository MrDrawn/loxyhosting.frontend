import React from 'react';

import {chakra, Box, Flex, useColorModeValue, Icon, Stack} from '@chakra-ui/react';

import {MdCheckCircleOutline, MdDesktopWindows, MdOutlineShield, MdSupport} from 'react-icons/md';

export default function C2g() {
  const Feature = props => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            bg={useColorModeValue('brand.500', 'brand.500')}
            color={useColorModeValue('brand.500', 'white')}
          >
            <Icon
              boxSize={10}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            color={useColorModeValue('gray.900', 'white')}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue('gray.500', 'gray.400')}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };

  return (
    <Box py={12} bg={useColorModeValue('white', 'gray.800')} data-aos="fade-up">
      <Box maxW="7xl" mx="auto" px={{base: 4, lg: 8}}>
        <Box textAlign={{lg: 'center'}}>
          <chakra.h2
            color={useColorModeValue('brand.600', 'brand.600')}
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Por que a {process.env.name}?
          </chakra.h2>
          <chakra.p
            mt={2}
            fontSize={{base: '3xl', sm: '4xl'}}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            color={useColorModeValue('gray.900', 'white')}
          >
            Escolha nossa empresa e se surpreenda
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{lg: 'auto'}}
            color={useColorModeValue('gray.500', 'gray.400')}
          >
            Melhores preços com serviços de qualidade e com um suporte de qualidade para ajudá-lo em
            suas dúvidas e problemas.
          </chakra.p>
        </Box>

        <Box mt={10}>
          <Stack
            spacing={{base: 10, md: 0}}
            display={{md: 'grid'}}
            gridTemplateColumns={{md: 'repeat(2,1fr)'}}
            gridColumnGap={{md: 8}}
            gridRowGap={{md: 10}}
          >
            <Feature title="Suporte qualificado" icon={<MdSupport />}>
              Uma das nossas principais preocupações é fornecer aos nossos clientes um suporte
              qualificado, temos uma equipe pronto para te atender a qualquer momento.
            </Feature>

            <Feature title="Proteção DDoS" icon={<MdOutlineShield />}>
              Temos as melhores proteções DDoS para mitigar todos os ataques feitos em serviços de
              nossos clientes, temos a capacidade de oferecer uma melhor estabilidade.
            </Feature>

            <Feature title="Disponibilidade de serviços" icon={<MdCheckCircleOutline />}>
              Trabalhamos dia e noite para manter os serviços de nossos clientes sempre ativos e sem
              risco de quedas, problemas podem acontecer e estamos aqui para solucionar.
            </Feature>

            <Feature title="Hardware de ponta" icon={<MdDesktopWindows />}>
              Temos os melhores hardwares de última geração para garantiar a melhor experiência em
              nossos serviços, nossa prioridade e manter o melhor desempenho.
            </Feature>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
