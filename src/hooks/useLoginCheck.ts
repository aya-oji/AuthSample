import { useCallback } from "react";
import { useLoginUser } from "./useLoginUser";

export const useLoginCheck = () => {
  const { loginUser } = useLoginUser();

  const loginCheck = useCallback(() => {
    let isAuthenticated = false;
    if (loginUser !== null) {
      isAuthenticated = true;
    }
    return isAuthenticated;
  }, [loginUser]);
  return { loginCheck };
};
