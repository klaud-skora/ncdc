import { Box, Center, Spinner, Image, Flex, Text } from "@chakra-ui/react";

import { Name, Picture } from "../../types";

interface TilesListProps {
  items?: {
    name: Name;
    picture: Picture;
    nat: string;
  }[];
  isLoading: boolean;
}

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
const getCountry = (code: string) => regionNames.of(code);
const getName = (name: Name) =>
  Object.values(name).reduce((prev, item) => `${prev} ${item}`, "");

export const TilesList = ({ items, isLoading }: TilesListProps) => {
  if (!items) {
    return isLoading ? (
      <Center height="300px" width="100%">
        <Spinner my={8} />
      </Center>
    ) : (
      <>No data found</>
    );
  }

  return (
    <Flex mx={-2} width="auto" flexWrap="wrap">
      {items.map(({ picture, name, nat }, index) => (
        <Flex
          key={`${name}-${index}`}
          px={2}
          mb={4}
          width="full"
          flexGrow={0}
          flexShrink={0}
          minW={{ base: "50%", lg: `${100 / 5}%` }}
          maxW={{ base: "50%", lg: `${100 / 5}%` }}
        >
          <Center
            width="full"
            border="1px solid black"
            flexDir="column"
            p={4}
            textAlign="center"
          >
            <Box mb={4}>
              <Image src={picture.medium} alt="User image" />
            </Box>
            <Text fontSize={22}>{getName(name)}</Text>
            <Text fontStyle="italic">{getCountry(nat)}</Text>
          </Center>
        </Flex>
      ))}
    </Flex>
  );
};
