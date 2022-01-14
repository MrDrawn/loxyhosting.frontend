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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

export default function Plans() {
  return (
    <Container maxW={'container.xl'}>
      <Box overflowX="auto" marginTop={'-80px'} paddingBottom={20} data-aos="fade-down">
        <Table
          variant="striped"
          border={'1px'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          borderRadius={'3'}
        >
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>vCPU</Th>
              <Th>Memória RAM</Th>
              <Th>Disco SSD</Th>
              <Th>Preço</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Plano 01</Td>
              <Td>1 vCPU</Td>
              <Td>2 GB</Td>
              <Td>120 GB</Td>
              <Td>R$ 24,00</Td>
              <Td>
                <Button colorScheme={'purple'} size={'sm'}>
                  Comprar agora
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Plano 02</Td>
              <Td>2 vCPU</Td>
              <Td>4 GB</Td>
              <Td>130 GB</Td>
              <Td>R$ 32,00</Td>
              <Td>
                <Button colorScheme={'purple'} size={'sm'}>
                  Comprar agora
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Plano 03</Td>
              <Td>4 vCPU</Td>
              <Td>6 GB</Td>
              <Td>140 GB</Td>
              <Td>R$ 40,00</Td>
              <Td>
                <Button colorScheme={'purple'} size={'sm'}>
                  Comprar agora
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Plano 04</Td>
              <Td>4 vCPU</Td>
              <Td>8 GB</Td>
              <Td>150 GB</Td>
              <Td>R$ 48,00</Td>
              <Td>
                <Button colorScheme={'purple'} size={'sm'}>
                  Comprar agora
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Plano 05</Td>
              <Td>6 vCPU</Td>
              <Td>10 GB</Td>
              <Td>160 GB</Td>
              <Td>R$ 56,00</Td>
              <Td>
                <Button colorScheme={'purple'} size={'sm'}>
                  Comprar agora
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Plano 06</Td>
              <Td>8 vCPU</Td>
              <Td>12 GB</Td>
              <Td>180 GB</Td>
              <Td>R$ 64,00</Td>
              <Td>
                <Button colorScheme={'purple'} size={'sm'}>
                  Comprar agora
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Plano 07</Td>
              <Td>10 vCPU</Td>
              <Td>14 GB</Td>
              <Td>200 GB</Td>
              <Td>R$ 72,00</Td>
              <Td>
                <Button colorScheme={'purple'} size={'sm'}>
                  Comprar agora
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Plano 08</Td>
              <Td>12 vCPU</Td>
              <Td>16 GB</Td>
              <Td>220 GB</Td>
              <Td>R$ 80,00</Td>
              <Td>
                <Button colorScheme={'purple'} size={'sm'}>
                  Comprar agora
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Plano 09</Td>
              <Td>14 vCPU</Td>
              <Td>24 GB</Td>
              <Td>240 GB</Td>
              <Td>R$ 112,00</Td>
              <Td>
                <Button colorScheme={'purple'} size={'sm'}>
                  Comprar agora
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Plano 10</Td>
              <Td>16 vCPU</Td>
              <Td>32 GB</Td>
              <Td>250 GB</Td>
              <Td>R$ 114,00</Td>
              <Td>
                <Button colorScheme={'purple'} size={'sm'}>
                  Comprar agora
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Plano 11</Td>
              <Td>16 vCPU</Td>
              <Td>64 GB</Td>
              <Td>300 GB</Td>
              <Td>R$ 208,00</Td>
              <Td>
                <Button colorScheme={'purple'} size={'sm'}>
                  Comprar agora
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
}
