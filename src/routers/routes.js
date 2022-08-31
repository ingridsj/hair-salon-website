import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Redirect } from "react-router";

import { HomePage } from "../pages/HomePage";
import { SignIn } from "../pages/SignIn";
import { Profile } from "../pages/Profile";
import { HistoryPage } from "../pages/HistoryPage";
import { Schedule } from "../pages/Schedule";
import { NewSchedule } from "../pages/NewSchedule";

import { StoreProvider } from "../hooks/useStore";
import { Content } from "../pages/Content";
import RouteWithSubRoutes from "../utils/RouteWithSubRoutes";
import { ClientHelp } from "../pages/ClientHelp"

export const routes = [
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/login",
    component: SignIn,
  },
  {
    path: "/dashboard",
    component: Content,
    routes: [
      {
        path: "/dashboard/profile",
        component: Profile,
      },
      {
        path: "/dashboard/history",
        component: HistoryPage,
      },
      {
        path: "/dashboard/schedule",
        component: Schedule,
      },
      {
        path: "/dashboard/new-schedule",
        component: NewSchedule,
      },
      {
        path: "/dashboard/help",
        component: ClientHelp,
      },
    ],
  },
];

export function Routes() {
  return (
    <Router>
      <StoreProvider>
        <Switch>
          <Redirect exact from="/" to="/home" />
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </StoreProvider>
    </Router>
  );
}
