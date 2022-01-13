import {Box, Container, HStack, Image, Text, useColorModeValue} from '@chakra-ui/react';

export default function Locations() {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.800')} id="locations">
        <Container maxW={'container.xl'}>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
            paddingTop={20}
            paddingBottom={40}
            data-aos="fade-right"
          >
            <Text
              color={useColorModeValue('gray.800', 'white')}
              fontWeight={800}
              fontSize={{base: '2xl', sm: '4xl', md: '3xl'}}
              lineHeight={'110%'}
            >
              Escolha a localização
            </Text>
            <HStack paddingTop={10}>
              <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius={'6px'}
                border={'2px'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                padding={'40px 56px'}
                cursor={'pointer'}
              >
                <Image
                  src={'flags/eua.png'}
                  width={'40px'}
                  userSelect={'none'}
                  onDragStart={event => event.preventDefault()}
                />
                <Text fontSize={'20px'} fontWeight={'700'}>
                  Estados Unidos
                </Text>
              </Box>
            </HStack>
          </Box>
        </Container>
      </Box>
    </>
  );
}
