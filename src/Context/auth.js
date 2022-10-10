import { useState, createContext } from "react";

export const Auth = createContext();

export default function AuthProvider(props) {
  const [userLoggedIn, setUserLoggedIn] = useState(() => {
    if (sessionStorage.getItem("user")) return true;
    else return false;
  });

  return (
    <Auth.Provider value={{ userLoggedIn, setUserLoggedIn }}>
      {props.children}
    </Auth.Provider>
  );
}
