import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Auth0LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button style={{ backgroundColor: "#080939", border: "solid 1px #cea935", color: "#cea935", fontSize: "22px", borderRadius: "4px" }} onClick={() => loginWithRedirect()}>Login</button>;
};

export default Auth0LoginButton;