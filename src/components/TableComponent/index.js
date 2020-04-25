import React from 'react';

import { connect } from 'react-redux';

import { Container } from './styles';

import { AiFillDelete } from 'react-icons/ai';

function TableComponent({ users }) {
  function handleDelete(user){
    console.log(user);
  }
  return (
    <Container>
      <h2>Lista</h2>
      <div className="table-responsive-sm">
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
            {users.map(user => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.cpf}</td>
                  <td>
                    <button onClick={() => handleDelete(user)} type="button">
                      <AiFillDelete size={24}/>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default connect(state => ({
  users: state.user
}))(TableComponent);

