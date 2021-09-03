import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

import { User } from "../types/api/user";

// コンテキストの型指定
export type LoginUserContextType = {
  // ログインユーザーの方法
  loginUser: User | null;
  // 更新用関数
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};

// コンテキストを生成
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

// provider処理
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  // ログインユーザーのstateを定義
  const [loginUser, setLoginUser] = useState<User | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
