import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { debounce } from "../../../utils/debounce";

interface SearchProps {
  setSearchedValue(value?: string): void;
}

export const Search = ({ setSearchedValue }: SearchProps) => {
  const debouncedChange = debounce(
    (nextValue) => setSearchedValue(nextValue),
    500
  );
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        onChange={(e) => debouncedChange(e.target.value)}
        placeholder={`Search by seed`}
        minW="200px"
        borderRadius="20px"
        w="auto"
      />
    </InputGroup>
  );
};
