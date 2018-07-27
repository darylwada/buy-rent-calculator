import React from 'react'
import { Row, NavbarBrand, Navbar, Nav, NavItem } from 'reactstrap'
import Scenarios from '../containers/Scenarios'

const styles = {
  navBar: {
    width: '100%'
  }
}

export default function Header(props) {
  return (
    <Row className="bg-white border shadow-sm">
      <Navbar style={styles.navBar}>
        <NavbarBrand className="font-weight-bold" href="/">
          <i className="fas fa-home fa-lg mr-1"></i>SmartBuy
        </NavbarBrand>
        <Nav>
          <NavItem>
            <Scenarios>
            </Scenarios>
          </NavItem>
        </Nav>
      </Navbar>
    </Row>
  )
}