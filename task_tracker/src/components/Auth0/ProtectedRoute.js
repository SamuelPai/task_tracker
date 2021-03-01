import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
//import { Example } from "../loading";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      // onRedirecting: () => console.log("HELLO"),
    })}
    {...args}
  />
);

export default ProtectedRoute;