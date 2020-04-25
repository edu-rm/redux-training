import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


import { Container } from './styles';
import ReduxLogo from '../../images/redux_logo.png';

export default function Header() {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" id="navegation" className="d-flex justify-content-between">
        <Navbar.Brand id="logo" href="/" className="navbar-brand">
          <img src={ReduxLogo} alt="logo"/>
          Redux
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <h3 id="name" className="text-center">Nome</h3>
          <Nav className="nav">
            <Nav.Link href="/dash">Dashboard</Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Navbar>

    </Container>
  );
}
