import React from "react";

export const initialValue = {
  dark:{
    background: '#000000',
  },
  white:{
    background: '#ffffff',
  }
}
export const MyContext = React.createContext(initialValue.dark)