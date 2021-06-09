import { createContext, useReducer } from "react";
import { Reducer } from "../reducer/Reducer";

export const BasketContext = new createContext();

const BasketContextProvider = (props) => {
  const [basket, dispatch] = useReducer(Reducer, []);

  return (
    <BasketContext.Provider value={{ basket, dispatch }}>
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
