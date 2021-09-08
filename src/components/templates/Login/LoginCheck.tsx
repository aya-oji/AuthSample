import { memo, ReactNode, VFC } from "react";
import { useLoginCheck } from "../../../hooks/useLoginCheck";
import { Redirect } from "react-router-dom";

// ReactNodeはタグで囲った要素を受け取るときに使用する（主にchildrenを受け取るとき）
type Props = {
  children: ReactNode;
};

/**
 * 未ログイン時はログイン画面にリダイレクト
 */
export const LoginCheck: VFC<Props> = memo((props) => {
  const { children } = props;
  // ログインチェック処理
  const { loginCheck } = useLoginCheck();
  const isAuthenticated = loginCheck();

  if (isAuthenticated) {
    return children;
  } else {
    return <Redirect to="/" />;
    // エラーメッセージ渡して表示したい
  }
});
