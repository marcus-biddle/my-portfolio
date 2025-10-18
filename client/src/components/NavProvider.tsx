import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type NavContextType = {
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
};

const NavContext = createContext<NavContextType>({
  activeLink: "",
  setActiveLink: () => {},
});

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <NavContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
