import { Flex, Image, Icon, Box } from "@chakra-ui/react";
import { MdChevronLeft } from "react-icons/md";

interface HeaderProps {
  isHome?: boolean;
}

export default function Header({ isHome = false }: HeaderProps) {
  return (
    <Box w="100%" maxW={1440} marginX="auto" paddingX={["10", "20", "28"]}>
      <Flex as="header" maxWidth={1440} h={100} mx="auto" align="center">
        {!isHome && <Icon as={MdChevronLeft} w={8} h={8} />}
        <Image
          src="/img/Logo.png"
          alt="Worldtrip"
          h={["35", "45"]}
          display="block"
          marginX="auto"
        />
      </Flex>
    </Box>
  );
}
