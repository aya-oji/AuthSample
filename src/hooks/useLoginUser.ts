import { useContext } from "react";

import {
  LoginUserContext,
  LoginUserContextType
} from "../providers/LoginUserProvider";

/**
 * このコンポーネントを使用するだけでContextを参照できる
 */
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
