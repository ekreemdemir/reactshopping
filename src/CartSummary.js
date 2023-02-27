import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink
} from "reactstrap";

const CardSummary = ({ cart, removeFromCart }) => {
  const renderSummary = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
        <DropdownMenu right>
          {console.log(cart)}
          {cart.map((cartItem) => {
            return (
              <DropdownItem key={cartItem.product.id}>
                <Badge color="danger" onClick={()=>removeFromCart(cartItem.product)}>X</Badge>
                {cartItem.product.productName}
                <Badge color="success">{cartItem.quantity}</Badge>
              </DropdownItem>
            );
          })}
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  const renderEmptyCart = () => {
    return (
        <NavItem>
            <NavLink>
                Empty Cart
            </NavLink>
        </NavItem>
    )
  }

  return <div>{cart.length>0?renderSummary():renderEmptyCart()}</div>
};

export default CardSummary;
