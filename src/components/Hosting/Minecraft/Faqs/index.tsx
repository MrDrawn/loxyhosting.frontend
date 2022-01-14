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
                    Quais versões eu posso utilizar no meu servidor Minecraft?
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
                Todas as versões. Disponibilizamos as versões mais recentes no nosso painel, assim
                você pode escolher a versão com apenas um clique. Se não tiver a versão que deseja,
                você também pode enviar a sua JAR e iniciar o servidor com a versão que desejar. No
                painel nós temos PaperSpigot, Magma, Forge e Nukkit.
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
                    Posso jogar com versão pirata no meu servidor de Minecraft?
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
                Sim, o cliente que decide se deseja liberar ou não a entrada de jogadores com
                Minecraft pirata.
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
                    Posso colocar plugins na minha Hospedagem de Minecraft?
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
                Sim, e deve usar! Indicamos a utilização de plugins como AuthMe, com ele cada
                jogador tem uma senha, garantindo a segurança dos seus amigos / jogadores.
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
                    Posso colocar mods na minha Hospedagem de Minecraft?
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
                Pode sim! Disponibilizamos o Forge e o Magma no nosso painel. Com o Forge você pode
                instalar apenas mods, com o Magma você pode instalar mods e plugins ao mesmo tempo.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}
