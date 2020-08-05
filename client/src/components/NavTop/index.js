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
      <Navbar style={{ backgroundColor: "#f8d78a", fontWeight: "700" }} light expand="md">
        <NavbarBrand href="/main">SetFlow</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              tag={RouterNavLink}
              to="/main"
              exact
              activeClassName="router-link-exact-active"
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