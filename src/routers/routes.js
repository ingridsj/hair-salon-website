import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RoutesPrivate } from "./Private/Private";
import { HomePage } from "../pages/HomePage";
import { SignIn } from "../pages/SignIn";
import { DashBoard } from "../pages/DashBoard";
import { StoreProvider } from "../hooks/useStore";

export function Routes() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={SignIn} />
          <RoutesPrivate path="/dashboard" component={DashBoard} />
        </Switch>
      </StoreProvider>
    </BrowserRouter>
  );
}
