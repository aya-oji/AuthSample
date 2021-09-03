import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

/**
 * ルーティング配列を返す
 * 各要素はオブジェクト
 *
 * path: URL
 * exact:
 *  true   URL完全一致でページを返す(そのURLの後に何か続くURLがあったりするときにtrue)
 *  false  URL部分一致でページを返す（その時点で該当する場合は処理に入る）
 * children: 遷移先コンポーネント
 */
export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
