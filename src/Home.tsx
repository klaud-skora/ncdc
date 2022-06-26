import { Box } from "@chakra-ui/react";
import { Header } from "./_app/components/Header";
import { Listing } from "./_app/components/listing";

export const Home = () => (
  <Box>
    <Header />
    <Listing />
  </Box>
);
