import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: VFC = memo(() => {
  return (
    // ルーティング分岐時はSwitchで囲う
    // 内部にRouteでそれぞれのルーティングを記載する
    <Switch>
      <LoginUserProvider>
        <Route exact path="/">
          <Login />
        </Route>
        {/**
         * Routeで囲う代わりにrender関数が使用できる
         * render関数の中でmapを使用する
         * 引数でpropを受け取れる
         * matchコンポーネント・urlが取得できる（現在のURL）
         */}
        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {HomeRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <HeaderLayout>{route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>
      {/* 一致しなかった場合は404ページに飛ばす */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
