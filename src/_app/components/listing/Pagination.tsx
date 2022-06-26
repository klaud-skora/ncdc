import React, { useEffect, useState } from "react";
import {
  Flex,
  BoxProps,
  HStack,
  Button,
  ButtonProps,
  Divider,
  Center,
} from "@chakra-ui/react";
import { PAGINATION_PAGES, INITIAL_BATCH } from "../../constants";

const PaginationButton = ({ isActive, ...props }: ButtonProps) => (
  <Button
    variant={isActive ? "active" : "solid"}
    minWidth="32px"
    minHeight="32px"
    boxSize="32px"
    fontSize="14px"
    color={isActive ? "white" : "main"}
    fontWeight={400}
    reversed={isActive ? false : true}
    {...props}
  />
);

interface PaginationProps extends BoxProps {
  current_page?: number;
  total_pages?: number;
  page_size?: number;
  batch: number;
  setPage(page: number): void;
  setBatch(batch: number): void;
}

export const Pagination = ({
  current_page,
  total_pages,
  page_size,
  setPage,
  batch,
  setBatch,
  ...boxProps
}: PaginationProps) => {
  const currentPage = current_page || 1;

  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const pagesArray: number[] = [];
    for (
      let i = (batch - 1) * PAGINATION_PAGES + 1;
      i <= batch * PAGINATION_PAGES;
      i++
    ) {
      pagesArray.push(i);
    }

    setPages(pagesArray);
  }, [batch]);

  useEffect(() => {
    setPage((batch - 1) * PAGINATION_PAGES + 1);
  }, [batch, setPage]);

  const canPrev = currentPage > 1;

  return (
    <Flex flexDir="column">
      <HStack
        border="1px solid black"
        justifyContent="center"
        borderRadius="5px"
        spacing={{
          base: 0,
          xs: 2,
        }}
        {...boxProps}
      >
        <PaginationButton
          onClick={() => setBatch(batch - 1)}
          isDisabled={batch === INITIAL_BATCH}
          aria-label="prev"
        >
          {`<<`}
        </PaginationButton>
        <Center height="full" borderColor="black">
          <Divider orientation="vertical" />
        </Center>
        {pages.map((p, i) => (
          <React.Fragment key={`p-${p}`}>
            <PaginationButton
              isActive={currentPage === p}
              onClick={() => setPage(p)}
              aria-label={`page ${p}`}
            >
              {p}
            </PaginationButton>
            {i !== pages.length - 1 && (
              <Center height="full" borderColor="black">
                <Divider orientation="vertical" />
              </Center>
            )}
          </React.Fragment>
        ))}
        <Center height="full" borderColor="black">
          <Divider orientation="vertical" />
        </Center>
        <PaginationButton onClick={() => setBatch(batch + 1)} aria-label="next">
          {`>>`}
        </PaginationButton>
      </HStack>
      <Flex width="auto" py={6} justifyContent="space-between">
        <Button
          variant="outline"
          isDisabled={!canPrev}
          onClick={() =>
            currentPage === pages[0]
              ? setBatch(batch - 1)
              : setPage(currentPage - 1)
          }
          borderRadius="25px"
        >
          {`<--`} Older
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            currentPage === pages[pages.length - 1]
              ? setBatch(batch + 1)
              : setPage(currentPage + 1)
          }
          borderRadius="25px"
        >
          Newer {`-->`}
        </Button>
      </Flex>
    </Flex>
  );
};
