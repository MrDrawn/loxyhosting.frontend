import {ReactNode} from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react';

const Testimonial = ({children}: {children: ReactNode}) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({children}: {children: ReactNode}) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({children}: {children: ReactNode}) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({children}: {children: ReactNode}) => {
  return (
    <Text textAlign={'center'} color={useColorModeValue('gray.600', 'gray.400')} fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({src, name, title}: {src: string; name: string; title: string}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Avaliations() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'container.xl'} py={16} as={Stack} spacing={12} data-aos="fade-right">
        <Stack spacing={0} align={'center'}>
          <Box textAlign={{lg: 'center'}}>
            <chakra.h2
              color={useColorModeValue('brand.600', 'brand.600')}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Avaliações
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{base: '3xl', sm: '4xl'}}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue('gray.900', 'white')}
            >
              Veja o que os clientes estão dizendo
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{lg: 'auto'}}
              color={useColorModeValue('gray.500', 'gray.400')}
            >
              Depoimentos de clientes que confiam em nosso trabalho.
            </chakra.p>
          </Box>
        </Stack>
        <Stack direction={{base: 'column', md: 'row'}} spacing={{base: 10, md: 4, lg: 10}}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Host de Minecraft</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet
                nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={'logo.png'} name={'Carlos Silva'} title={'LoxyHosting'} />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Host de Bot</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet
                nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={'logo.png'} name={'Carlos Silva'} title={'LoxyHosting'} />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Servidor VPS</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet
                nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={'logo.png'} name={'Carlos Silva'} title={'LoxyHosting'} />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
