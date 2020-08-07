import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Button, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import styles from "./style.css"
import LogoIcon from "./images/logo-icon.png"
import LogoText from "./images/logo-text.png"


const NavTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <div>
      <Navbar style={{ backgroundColor: "#CEA935", fontFamily: "Didot, serif" }} light expand="md">
        <NavbarBrand href="/main">
          <img src={LogoIcon} alt="Logo Icon" width="50px" />
          <img src={LogoText} alt="Logo Text" width="100px" />
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              tag={RouterNavLink}
              to="/main"
              exact
              activeClassName="router-link-exact-active"
              style={{ fontWeight: "500", color: "Black", fontSize: "20px" }}
            >
              Home
              </NavLink>
          </NavItem>
          {isAuthenticated && (
            <NavItem>
              <NavLink
                tag={RouterNavLink}
                to="/edit"
                exact
                activeClassName="router-link-exact-active"
                style={{ fontWeight: "500", color: "Black", fontSize: "20px" }}
              >
                Edit Gigs & Sets
              </NavLink>
            </NavItem>)}
          {isAuthenticated && (
            <NavItem>
              <NavLink
                tag={RouterNavLink}
                to="/launched"
                exact
                activeClassName="router-link-exact-active"
                style={{ fontWeight: "500", color: "Black", fontSize: "20px" }}
              >
                Launched Gigs
              </NavLink>
            </NavItem>)}
          {!isAuthenticated && (
            <NavItem>
              <Button
                id="qsLoginBtn"
                color="primary"
                className="btn-margin"
                onClick={() => loginWithRedirect()}
                style={{ fontWeight: "500", color: "#cea935", fontSize: "20px" }}
              >
                Log in
                  </Button>
            </NavItem>
          )}

        </Nav>
      </Navbar>
    </div>
  );
};

export default NavTop;