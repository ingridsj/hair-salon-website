import { Switch } from "react-router";
import { SideBar } from "../../components/SideBar";
import { TopBar } from "../../components/TopBar";
import { useStore } from "../../hooks/useStore";
import RouteWithSubRoutes from "../../utils/RouteWithSubRoutes";
import { RoutesPrivate } from "../../routers/Private/Private";

import "./index.scss";

export function Content({ children, routes }) {
  const { token } = useStore();

  return (
    <>
      {token ? (
        <div>
          <TopBar />
          <div className="container">
            <SideBar />
            <div className="other-pages">
              <RoutesPrivate>
                <Switch>
                  {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                  ))}
                </Switch>
              </RoutesPrivate>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
