import React, { createContext, useReducer } from "react";

export const AuthenticationContext = createContext();

const reducer = (state, pair) => ({ ...state, ...pair });

const initialState = {
  bearerToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTk3MjIyMTcwM2E2ZjRlMjdhMTdmYSIsImlhdCI6MTY0MjczODcyOSwiZXhwIjoxNjQzMzQzNTI5fQ.lYBlxLZrxZNKaRTrUhkIiEJZWMeEJw00t2uMJpW7lGE",
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
