import { createContext, useContext } from "react";
import { useStorage } from "../utils/useStorage";

const StoreContext = createContext({
  token: null,
  setToken: () => {},
});

export function StoreProvider({ children }) {
  const [token, setToken] = useStorage("token");

  return (
    <StoreContext.Provider value={{ token, setToken }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);

  return context;
}
