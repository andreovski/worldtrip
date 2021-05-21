import {
  Flex,
  Image,
  Text,
  Box,
  Stack,
  useBreakpointValue,
  SimpleGrid,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Carousel from "../components/Index/Carousel";
import TravelTypes from "../components/Index/TravelTypes";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      <Header isHome />

      <Flex h={335} justify="center">
        <Image
          src="/img/sky.jpg"
          h="100%"
          w="100%"
          objectFit="cover"
          alt="poster"
        />

        <Flex
          h={335}
          w="100%"
          maxWidth={1440}
          position="absolute"
          paddingX={["10", "20", "140"]}
          justify="space-between"
          direction="row"
        >
          <Stack spacing={6} marginY="auto">
            <Text
              fontSize={["30", "36"]}
              color="gray.50"
              maxWidth={426}
              fontWeight="bold"
            >
              5 Continentes, <br />
              infinitas possibilidades.
            </Text>
            <Text fontSize={["18", "20"]} color="gray.200" maxWidth={524}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>

          <Box>
            {isWideVersion && (
              <Image
                src="/img/Airplane.png"
                alt="plane icon"
                position="relative"
                top="76"
                left="20"
              />
            )}
          </Box>
        </Flex>
      </Flex>

      <Box maxW={1440} marginX="auto" padding={["20", "20", "28"]}>
        <SimpleGrid
          flex="1"
          gap={["8", "8", "6"]}
          justify="space-between"
          minChildWidth="170px"
        >
          <TravelTypes src="/icons/cocktail.png" alt="Coquetel">
            vida noturna
          </TravelTypes>
          <TravelTypes src="/icons/surf.png" alt="Surf">
            praia
          </TravelTypes>
          <TravelTypes src="/icons/building.png" alt="Construção">
            moderno
          </TravelTypes>
          <TravelTypes src="/icons/museum.png" alt="Museu">
            clássico
          </TravelTypes>
          <TravelTypes src="/icons/earth.png" alt="Terra">
            e mais...
          </TravelTypes>
        </SimpleGrid>

        <Flex h="0.5" w="24" marginX="auto" bg="teal.700" marginTop={20} />

        <Flex direction="column" marginTop={14}>
          <Stack spacing={["6", "1.5"]} textAlign="center" marginBottom="12">
            <Text fontSize="36">Vamos nessa?</Text>
            <Text fontSize="36">Então escolha seu continente</Text>
          </Stack>

          <Carousel />
        </Flex>
      </Box>
    </>
  );
}
