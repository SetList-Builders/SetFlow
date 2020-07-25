import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavTop = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">SetFlow</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavTop;