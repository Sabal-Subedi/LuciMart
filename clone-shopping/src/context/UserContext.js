import { createContext, useReducer } from "react";
import { UserReducer } from "../reducer/UserReducer";

export const UserContext = new createContext();

const UserContextProvider = (props) => {
  const [user, dispatch] = useReducer(UserReducer, null);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
