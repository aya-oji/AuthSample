import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";
import { Router } from "./router/Router";
/**
 * chakraUI cssフレームワーク. 使い方は公式サイトに記載あり
 * インストールの上で<ChakraProvider>で囲むと使用できる
 */

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* ルーティングを使用する際に全体をBrowserRouterで囲う */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
