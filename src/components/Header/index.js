import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';

import { Container } from './styles';
import ReduxLogo from '../../images/redux_logo.png';

function Header({ userSize }) {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" id="navegation" className="d-flex justify-content-between">
        <Navbar.Brand id="logo" href="/" className="navbar-brand">
          <img src={ReduxLogo} alt="logo"/>
          Redux
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <h3 id="name" className="text-center">{userSize}</h3>
          <Nav className="nav">
            <Nav.Link as={Link} to="/dash">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Navbar>

    </Container>
  );
}

export default connect(state => ({
  userSize: state.user.length,
}))(Header);
