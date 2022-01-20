import React, { createContext, useReducer } from "react";

export const AuthenticationContext = createContext();

const reducer = (state, pair) => ({ ...state, ...pair });

const initialState = {
  bearerToken: "null"
};

export function AuthenticationProvider(props) {
  const [state, update] = useReducer(reducer, initialState);

  return (
    <AuthenticationContext.Provider value={{ state, update }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
}
// const {state, update} = useContext(AuthenticationContext);
// state.bearerToken
// update({bearerToken: abcxyz})