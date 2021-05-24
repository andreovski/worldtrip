import { Image, Text, Flex, TextProps, ImageProps } from "@chakra-ui/react";
import Link from "next/link";

interface ContentProps {
  title?: string;
  children?: string;
  imageSrc: string;
  imageAlt: string;
}

export function Content({ title, children, imageSrc, imageAlt }: ContentProps) {
  return (
    <>
      <Link href="/continent">
        <Flex
          h="100%"
          w="100%"
          align="center"
          justify="center"
          position="absolute"
          direction="column"
          cursor="pointer"
        >
          <Text
            fontSize={["36", "48"]}
            fontWeight="bold"
            color="white"
            zIndex="2"
          >
            {title}
          </Text>
          <Text
            fontSize={["18", "24"]}
            fontWeight="bold"
            color="white"
            zIndex="2"
          >
            {children}
          </Text>
        </Flex>
      </Link>

      <Image
        filter="brightness(60%)"
        objectFit="cover"
        src={imageSrc}
        alt={imageAlt}
      />
    </>
  );
}
