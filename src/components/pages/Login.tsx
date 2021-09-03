import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

/**
 * ログインコンポーネント
 */
export const Login: VFC = memo(() => {
  // カスタムフック. ログイン処理の関数を取得
  const { login, loading } = useAuth();

  // 初期値で型推論できる場合は型指定しなくても良い
  const [userId, setUserId] = useState("");

  // 引数でフォームのChangeイベントを受け取る→フォーム入力値を更新
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  // カスタムフック: userAuth のlogin関数コンポーネントを呼び出し
  const onClickLogin = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
