import {
  chakra,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Faqs() {
  return (
    <Box py={12} bg={useColorModeValue('gray.100', 'gray.700')}>
      <Box maxW={'container.xl'} mx="auto" px={{base: 4, lg: 8}} data-aos="fade-right">
        <Box textAlign={{lg: 'center'}}>
          <chakra.h2
            color={useColorModeValue('brand.600', 'brand.600')}
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Perguntas Frequentes
          </chakra.h2>
          <chakra.p
            mt={2}
            fontSize={{base: '3xl', sm: '4xl'}}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            color={useColorModeValue('gray.900', 'white')}
          >
            Tire suas dúvidas antes de comprar
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{lg: 'auto'}}
            color={useColorModeValue('gray.500', 'gray.400')}
          >
            Se não achar oque procura basta abrir um ticket de suporte.
          </chakra.p>
        </Box>

        <Box mt={10}>
          <Accordion allowToggle>
            <AccordionItem border={'none'} mb={5}>
              <h2>
                <AccordionButton
                  bg={useColorModeValue('white', 'gray.800')}
                  color={useColorModeValue('gray.900', 'gray.400')}
                  height={'60px'}
                  borderTopRadius={'6px'}
                  _hover={{
                    bg: useColorModeValue('white', 'gray.800'),
                    color: useColorModeValue('gray.900', 'gray.400'),
                  }}
                >
                  <Box fontSize={'16px'} fontWeight={600} flex="1" textAlign="left">
                    Oque é um servidor VPS?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.500', 'gray.400')}
                borderBottomRadius={'6px'}
                pb={4}
              >
                O VPS, ou servidor VPS é um servidor virtual privado (Virtual Private Server, em
                inglês). Este tipo de servidor é bastante robusto, possui alta capacidade de
                processamento, rapidez para transferir informações e dados e espaço de sobra para
                armazenar arquivos, além de uma memória RAM totalmente dedicada.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem border={'none'} mb={5}>
              <h2>
                <AccordionButton
                  bg={useColorModeValue('white', 'gray.800')}
                  color={useColorModeValue('gray.900', 'gray.400')}
                  height={'60px'}
                  borderTopRadius={'6px'}
                  _hover={{
                    bg: useColorModeValue('white', 'gray.800'),
                    color: useColorModeValue('gray.900', 'gray.400'),
                  }}
                >
                  <Box fontSize={'16px'} fontWeight={600} flex="1" textAlign="left">
                    Qual diferença entre Servidor VPS e Hospedagem?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.500', 'gray.400')}
                borderBottomRadius={'6px'}
                pb={4}
              >
                No servidor VPS seu projeto online estará hospedado em um servidor isolado, ou seja,
                você terá processamento, tráfego e espaço em disco dedicados e isso garantirá o
                excelente desempenho de suas aplicações.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem border={'none'} mb={5}>
              <h2>
                <AccordionButton
                  bg={useColorModeValue('white', 'gray.800')}
                  color={useColorModeValue('gray.900', 'gray.400')}
                  height={'60px'}
                  borderTopRadius={'6px'}
                  _hover={{
                    bg: useColorModeValue('white', 'gray.800'),
                    color: useColorModeValue('gray.900', 'gray.400'),
                  }}
                >
                  <Box fontSize={'16px'} fontWeight={600} flex="1" textAlign="left">
                    Pra que server o servidor VPS?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.500', 'gray.400')}
                borderBottomRadius={'6px'}
                pb={4}
              >
                Se tem notado que sua hospedagem não está mais acompanhando o crescimento do seu
                projeto e precisa de mais processamento, memória e velocidade um servidor VPS pode
                ser a escolha certa.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}
