/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { user, data, cart } from "./data/Data.jsx";

const GlobalContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props) => {
  const [defaultUser, setDefaultUser] = useState(user);
  const [defaultCart, setDefaultCart] = useState(cart);
  const [defaultData, setDefaultData] = useState(data);
  return (
    <GlobalContext.Provider
      value={{
        defaultUser,
        setDefaultUser,
        defaultCart,
        setDefaultCart,
        defaultData,
        setDefaultData,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
