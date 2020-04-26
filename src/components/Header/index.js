import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';

import { Container } from './styles';
import ReduxLogo from '../../images/redux_logo.png';

function Header({ userSize, users }) {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" id="navegation" className="d-flex justify-content-between">
        <Navbar.Brand id="logo" href="/" className="navbar-brand">
          <img src={ReduxLogo} alt="logo"/>
          Redux
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <h3 id="name" className="text-center">
            Última pessoa cadastrada:
            <span>{userSize !== 0 ? users[userSize-1].name : ''}</span>
          </h3>
          <Nav className="nav">
            <Nav.Link as={Link} to="/dash">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Navbar>

    </Container>
  );
}

const mapStateToProps = state => ({
  users: state.user,
  userSize: state.user.length,
});

export default connect(mapStateToProps)(Header);
