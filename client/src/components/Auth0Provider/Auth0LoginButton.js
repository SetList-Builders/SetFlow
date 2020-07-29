import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Auth0LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect(window.location.origin)}>Auth0 Log In</button>;
};

export default Auth0LoginButton;