import React from 'react';

import { Container } from './styles';

import { AiFillDelete } from 'react-icons/ai';

export default function TableComponent() {
  return (
    <Container>
      <h2>Lista</h2>
      <table id="table-info" className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">CPF</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>dksfkds</td>
            <td>fjgdfjg@gmail.com</td>
            <td>23423423423</td>
            <td>
              <button type="button">
                <AiFillDelete size={24}/>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

