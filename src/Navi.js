import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";
import {Link} from "react-router-dom"

function Navi({ cart, removeFromCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md">
        <NavbarBrand href="/">Nortwind App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="form1">
                Form Demo 1
              </Link>
            </NavItem>
          </Nav>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://github.com/ekreemdemir">
                Ekrem GitHub
              </NavLink>
            </NavItem>
            <CartSummary removeFromCart={removeFromCart} cart={cart} />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Navi;
