import { ChakraProvider } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";

import theme from "./_app/theme";
import { Home } from "./Home";

const APP_ROUTES = {
  HOME: "/",
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        <Route path="/*" element={<Navigate to={APP_ROUTES.HOME} replace />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
