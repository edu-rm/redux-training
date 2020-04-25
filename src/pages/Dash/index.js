import React from 'react';

import TableComponent from '../../components/TableComponent';
import { Container } from './styles';

export default function Dash() {
  return (
    <Container>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <TableComponent />
          </div>
        </div>
      </div>
    </Container>
  );
}
