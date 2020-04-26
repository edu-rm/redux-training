import React from 'react';

import TableComponent from '../../components/TableComponent';
import { Container } from './styles';
import { Button } from 'react-bootstrap';

export default function Dash() {
  return (
    <Container>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <TableComponent />
          </div>
        </div>
      </div>
    </Container>
  );
}
