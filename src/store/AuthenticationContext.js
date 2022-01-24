import React, { createContext, useReducer } from "react";

export const AuthenticationContext = createContext(initialState);

const reducer = (state, pair) => ({ ...state, ...pair });

const initialState = {
  bearerToken: "null",
  id: "null",
  userName: "null"
  // bearerToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTk3MjIyMTcwM2E2ZjRlMjdhMTdmYSIsImlhdCI6MTY0MjY4OTA1OSwiZXhwIjoxNjQzMjkzODU5fQ.w-Gfi0czJty2MXLqlZ6CySn_vRhWGYM1nqHDcDADHIY"
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
