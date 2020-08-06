import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Button, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


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
      <Navbar style={{ backgroundColor: "#080939", fontWeight: "700", color: "#080939", borderBottom: "solid 1px #9d9d9d" }} expand="md">
        <NavbarBrand style={{ fontWeight: "700", color: "#cea935", fontSize: "30px" }} href="/main">SetFlow</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              tag={RouterNavLink}
              to="/main"
              exact
              activeClassName="router-link-exact-active"
              style={{ fontWeight: "500", color: "#cea935", fontSize: "20px" }}
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
                style={{ fontWeight: "500", color: "#cea935", fontSize: "20px" }}
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
                style={{ fontWeight: "500", color: "#cea935", fontSize: "20px" }}
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