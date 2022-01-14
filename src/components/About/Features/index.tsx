import {ReactElement} from 'react';
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  chakra,
  Stack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import {FcAssistant, FcDonate, FcInTransit} from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({title, text, icon}: FeatureProps) => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.700')} p={5}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={useColorModeValue('gray.100', 'gray.800')}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={useColorModeValue('gray.600', 'gray.300')}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Box py={12} bg={useColorModeValue('gray.100', 'gray.800')}>
      <Box maxW={'container.xl'} mx="auto" px={{base: 4, lg: 8}} data-aos="fade-right">
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
        <Box mt={10} p={4}>
          <SimpleGrid columns={{base: 1, md: 3}} spacing={10}>
            <Feature
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              title={'Suporte qualificado'}
              text={
                'Uma das nossas principais preocupações é fornecer aos nossos clientes um suporte qualificado, temos uma equipe pronto para te atender a qualquer momento.'
              }
            />
            <Feature
              icon={<Icon as={FcDonate} w={10} h={10} />}
              title={'Reembolso garantido'}
              text={
                'Você tem até 7 dias para realizar o reembolso do seu serviço caso você encontre um problema ou não curta o serviço.'
              }
            />
            <Feature
              icon={<Icon as={FcInTransit} w={10} h={10} />}
              title={'Entrega imediata'}
              text={
                'A entrega de nossos serviços são totalmentes automáticas após a aprovação do pagamento de sua fatura.'
              }
            />
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
