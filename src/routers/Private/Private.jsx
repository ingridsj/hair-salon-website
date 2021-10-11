import { Route, Redirect } from "react-router-dom";

import { useStore } from "../../hooks/useStore";

export function RoutesPrivate({ component: Component, ...rest }) {
  const { token } = useStore();

  return (
    <Route
      {...rest}
      render={() =>
        token ? <Component {...rest} /> : <Redirect to="/login" />
      }
    />
  );
}
