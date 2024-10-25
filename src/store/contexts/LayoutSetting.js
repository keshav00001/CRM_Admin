import React, { useState, createContext } from "react";

export const LayoutSettingContext = createContext();

export const LayoutSettingProvider = (props) => {
  const [showTopNavbar, setShowTopNavbar] = useState(true);

  const data = { showTopNavbar, setShowTopNavbar };

  return (
    <LayoutSettingContext.Provider value={data}>
      {props.children}
    </LayoutSettingContext.Provider>
  );
};
