import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Auth0LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="Auth0Button myButton" onClick={() => loginWithRedirect()}>START JAMMIN'</button>;
};

export default Auth0LoginButton;