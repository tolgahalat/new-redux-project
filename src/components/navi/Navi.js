import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import CartSummery from "../cart/CartSummery";

export default class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand><Link to={"/"}>Main</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle}></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="me-auto" navbar>
            <NavItem>
                {/* <Link to="testform">Test Form</Link> */}
              </NavItem>
            <NavItem>
              <NavLink>
                {/* <Link to="NewForm">New Form</Link> */}
                </NavLink>
              </NavItem>
              <CartSummery></CartSummery>
            </Nav>
            
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
