import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const Context = createContext();
const { Provider } = Context;

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    searchText: "",
    min: 0,
    max: 0,
    total: 0,
  });
  return <Provider value={[state, dispatch]}>{children}</Provider>;
}

export default StoreProvider;
