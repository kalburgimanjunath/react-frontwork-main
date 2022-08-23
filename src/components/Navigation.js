import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
export default function Navigation(args) {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <>
        <Nav color="dark">
          <NavItem>
            <NavLink active href="">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/dashboard">Build Website</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/newsletters">Newsletters</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/mgml">Newsletters(MSTL)</NavLink>
          </NavItem>
        </Nav>
      </>
    </div>
  );
}
