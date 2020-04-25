import React from 'react';

// import { Container } from './styles';

export default function TableComponent() {
  return (
    <table id="table-info" className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Email</th>
          <th scope="col">CPF</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>dksfkds</td>
          <td>fjgdfjg@gmail.com</td>
          <td>23423423423</td>
        </tr>
      </tbody>
    </table>
  );
}

