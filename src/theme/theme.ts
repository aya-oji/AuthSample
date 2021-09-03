import { extendTheme } from "@chakra-ui/react";

/**
 * txtendTheme()にスタイルオブジェクトを入れることで定義可能
 */
const theme = extendTheme({
  // グローバルなstyleの定義
  styles: {
    global: {
      body: {
        backgroundColor: "Gray.100",
        color: "Gray.800"
      }
    }
  }
});

export default theme;
