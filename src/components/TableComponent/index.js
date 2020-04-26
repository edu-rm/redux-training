import React, { useState } from 'react';

import { connect } from 'react-redux';

import { Container } from './styles';
import { Button, Modal } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

function TableComponent({ users }) {
  const [showModal, setShowModal] = useState(false);
  const [userModal, setUserModal] = useState('');
  function handleDelete(user){
    console.log(user);
  }

  function handleShowModal(user){
    setShowModal(true);
    setUserModal(user);
  }

  function handleCloseModal(){
    setShowModal(false);
  }

  return (
    <Container>
      <h2>Lista</h2>
      <div className="table-responsive-sm">
        <table id="table-info" className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="col-md-4">Nome</th>
              <th scope="col" className="col-md-3">Peso</th>
              <th scope="col" className="col-md-3">Altura</th>
              <th scope="col" className="col-md-2" id="action-header-cell">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.peso}</td>
                  <td>{user.altura}</td>
                  <td id="actions-cell">
                    <button id="delete-button" onClick={() => handleDelete(user)} type="button">
                      <AiFillDelete size={24}/>
                    </button>
                    <Button onClick={()=> handleShowModal(user)} variant="info">Info</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>IMC de {userModal.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{userModal.imc}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

const mapStateToProps = state => ({
  users: state.user.map(user => ({
    ...user,
    imc: (user.peso)/(user.altura*user.altura),
  }))
});

export default connect(mapStateToProps)(TableComponent);

