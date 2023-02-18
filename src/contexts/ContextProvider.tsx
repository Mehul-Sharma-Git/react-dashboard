import { ClickEventArgs } from "@syncfusion/ej2/buttons";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface ContextProps {
  activeMenu?: any;
  setActiveMenu?: any;
  isClicked?: any;
  setIsClicked?: any;
  handleClick?: any;
  screenSize?: any;
  setScreenSize?: any;
  currentMode?: any;
  currentColor?: any;
  setMode?: any;
  setColor?: any;
  themeSettings?: any;
  setThemeSettings?: any;
}
const StateContext = createContext<ContextProps>({});

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notifications: false,
};
interface ContextProviderProps {
  children?: ReactNode;
}
export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Dark");
  const [themeSettings, setThemeSettings] = useState(false);
  const setMode = (e: any) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };
  const setColor = (color: any) => {
    setCurrentColor(color);
    localStorage.setItem("themeColor", color);
    setThemeSettings(false);
  };

  const handleClick = (clicked: any) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentMode,
        currentColor,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
