import { Box, Img, Flex, Text, Stack } from "@chakra-ui/react";

interface CardProps {
  location: {
    imageSrc: string;
    city: string;
    country: string;
    flagSrc: string;
  };
}

export default function Card({ location }: CardProps) {
  return (
    <Box
      marginY={4}
      w="64"
      minHeight="300px"
      maxHeight="400px"
      borderRadius="6px"
      border="1px"
      borderColor="gray.300"
      justifySelf="center"
    >
      <Img
        src={location.imageSrc}
        alt={location.city}
        objectFit="cover"
        w="100%"
        h={44}
        borderRadius="6px 6px 0 0"
      />
      <Flex
        marginTop={5}
        align="center"
        as="div"
        w="fit-content"
        marginX="auto"
        gridGap={24}
      >
        <Stack spacing="10px" width="fit-content" marginBottom={1}>
          <Text fontWeight="bold" fontSize="20px">
            {location.city}
          </Text>
          <Text color="gray.400" w="min-content">
            {location.country}
          </Text>
        </Stack>
        <Img src={location.flagSrc} w={8} h={8} borderRadius="full" />
      </Flex>
    </Box>
  );
}
