import Logo from "../shared/components/Logo";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Example(args) {
  return (
    <div>
      <Navbar color="dark" dark {...args}>
        <div className="d-flex align-center">
          <Logo />
          <NavbarBrand href="/">BUSDANANG</NavbarBrand>
        </div>
        <Nav pills>
          <NavItem>
            <NavLink active href="/">
              TRANG CHỦ
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">TÌM ĐƯỜNG</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">LỘ TRÌNH</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">VÉ XE</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              XEM THÊM
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href="/">TIN TỨC</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/">HƯỚNG DẪN</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/">LIÊN HỆ</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Example;
