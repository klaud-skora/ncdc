import { Text, Center } from "@chakra-ui/react";

import { HEADER_HEIGHT } from "../constants";

export const Header = () => (
  <Center as="header" height={HEADER_HEIGHT} borderBottom="1px solid black">
    <Text as="h1" fontSize={24} textTransform="uppercase">
      My awesome app
    </Text>
  </Center>
);
