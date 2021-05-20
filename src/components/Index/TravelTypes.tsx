import { Flex, Stack, Image, Text, ImageProps } from "@chakra-ui/react";

interface TravelTypesProps extends ImageProps {
  children: string;
}

export default function TravelTypes({
  children,
  src,
  alt,
  ...rest
}: TravelTypesProps) {
  return (
    <Stack spacing="6" padding="2">
      <Image
        src={src}
        alt={alt}
        marginX="auto"
        boxSize={["16", "16", "20"]}
        {...rest}
      />
      <Text fontWeight="bold" fontSize={24} textAlign="center">
        {children}
      </Text>
    </Stack>
  );
}
