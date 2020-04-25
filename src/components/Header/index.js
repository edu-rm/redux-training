import React from 'react';
import { Link } from 'react-router-dom';


import { Container } from './styles';
import ReduxLogo from '../../images/redux_logo.png';

export default function Header() {
  return (
    <Container>
      <nav id="navegation" className="navbar navbar-expand-lg d-flex justify-content-between">
        <a id="logo" href="#" className="navbar-brand">
          <img src={ReduxLogo} alt="logo"/>
          Redux
        </a>
        <ul id="bar" className="nav justify-content-end">
          <li className="nav-item active">
            <Link className="nav-link" to="/dash">Dashboard</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
