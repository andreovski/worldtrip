import { Flex, SimpleGrid, Img, Stack, Text, Box } from "@chakra-ui/react";
import Header from "../../components/Header";

import { subtitleSizes, titleSizes } from "./CustomFontSizes";

export default function Continent() {
  return (
    <>
      <Header />

      <Flex h="100vh" maxHeight="500px" justify="center">
        <Img
          src="https://source.unsplash.com/-uQBxh6L5D4"
          h="100%"
          w="100%"
          objectFit="cover"
          alt="poster"
          filter="brightness(60%)"
        />

        <Flex
          w="100%"
          height="500px"
          maxWidth={1440}
          position="absolute"
          paddingX={["10", "20", "140"]}
          justify={["center", "initial", "initial"]}
          align="flex-end"
        >
          <Text
            position="relative"
            bottom="52px"
            fontSize={["36", "48"]}
            color="gray.50"
            fontWeight="bold"
          >
            Europa
          </Text>
        </Flex>
      </Flex>

      <Box maxW={1440} marginX="auto" padding={["12", "12", "12", "24"]}>
        <SimpleGrid
          templateColumns={["1fr", "1fr", "1fr", "2fr 1fr"]}
          gap={["14", "20"]}
          marginBottom={8}
        >
          <Text fontSize={["18px", "18px", "20px", "22px"]} textAlign="justify">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <Flex
            align="center"
            justify="center"
            direction={["column", "column", "column", "row"]}
            whiteSpace="nowrap"
          >
            <Flex
              direction="column"
              align="center"
              fontWeight="bold"
              margin={[8, 4]}
              textAlign="center"
            >
              <Text as="span" color="yellow.500" fontSize={titleSizes}>
                50
              </Text>
              <Text fontSize={subtitleSizes}>países</Text>
            </Flex>

            <Flex
              direction="column"
              align="center"
              fontWeight="bold"
              margin={[8, 4]}
              textAlign="center"
              whiteSpace="nowrap"
            >
              <Text as="span" color="yellow.500" fontSize={titleSizes}>
                60
              </Text>
              <Text fontSize={subtitleSizes}>línguas</Text>
            </Flex>

            <Flex
              direction="column"
              align="center"
              fontWeight="bold"
              margin={[8, 4]}
              textAlign="center"
              whiteSpace="nowrap"
            >
              <Text as="span" color="yellow.500" fontSize={titleSizes}>
                27
              </Text>
              <Text fontSize={subtitleSizes}>cidades +100</Text>
            </Flex>
          </Flex>
        </SimpleGrid>

        <Box marginY={[12, 24]}>
          <Text fontSize={["26px", "26px", "36px"]} fontWeight="bold">
            Cidades +100
          </Text>

          <SimpleGrid templateColumns="repeat(4, 1fr)" gap={12}></SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
