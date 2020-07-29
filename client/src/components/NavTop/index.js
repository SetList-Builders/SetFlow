import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavTop = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/main">SetFlow</NavbarBrand>
        <Nav className="ml-auto" navbar>
            <NavLink href="/main">Home</NavLink>
            <NavLink href="/edit">Edit Gigs & Sets</NavLink>
            <NavLink href="/launched">Launched Gigs</NavLink>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavTop;