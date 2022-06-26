import { Center, Flex } from "@chakra-ui/react";

import {} from "../../constants";
import { useListing } from "../../hooks/useListing";
import { Search } from "./Search";
import { Pagination } from "./Pagination";
import { TilesList } from "./TilesList";

export const Listing = () => {
  const { data, setSeed, page, setPage, setBatch, batch } = useListing();

  return (
    <Center as="section" mx="auto" py={8} px={8} maxW="1440px">
      <Flex flexDir="column" gap={8}>
        <Search setSearchedValue={setSeed} />
        <TilesList items={data?.results} isLoading={false} />
        <Flex justifyContent="flex-end">
          <Pagination
            current_page={page}
            batch={batch}
            setPage={setPage}
            setBatch={setBatch}
          />
        </Flex>
      </Flex>
    </Center>
  );
};
