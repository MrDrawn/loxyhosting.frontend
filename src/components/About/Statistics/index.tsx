import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import {ReactNode} from 'react';
import {BsPerson} from 'react-icons/bs';
import {FiServer} from 'react-icons/fi';
import {GoLocation} from 'react-icons/go';

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const {title, stat, icon} = props;
  return (
    <Stat
      bg={useColorModeValue('gray.100', 'gray.700')}
      px={{base: 2, md: 4}}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{base: 2, md: 4}}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box my={'auto'} color={useColorModeValue('gray.800', 'gray.200')} alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Statistics() {
  return (
    <Box py={12} bg={useColorModeValue('white', 'gray.800')} data-aos="fade-up">
      <Box maxW={'container.xl'} mx={'auto'} pt={5} px={{base: 2, sm: 12, md: 17}}>
        <Box textAlign={{lg: 'center'}}>
          <chakra.h2
            color={useColorModeValue('brand.600', 'brand.600')}
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Estatísticas da {process.env.name}
          </chakra.h2>
          <chakra.p
            mt={2}
            fontSize={{base: '3xl', sm: '4xl'}}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            color={useColorModeValue('gray.900', 'white')}
          >
            As estatísticas de nossa empresa
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{lg: 'auto'}}
            color={useColorModeValue('gray.500', 'gray.400')}
          >
            Estamos crescendo dia após dia graças a nossos clientes.
          </chakra.p>
        </Box>
        <SimpleGrid mt={10} columns={{base: 1, md: 3}} spacing={{base: 5, lg: 8}}>
          <StatsCard title={'Clientes cadastrados'} stat={'183'} icon={<BsPerson size={'3em'} />} />
          <StatsCard title={'Serviços hospedados'} stat={'32'} icon={<FiServer size={'3em'} />} />
          <StatsCard
            title={'Localizações disponíveis'}
            stat={'2'}
            icon={<GoLocation size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
