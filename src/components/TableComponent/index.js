import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container } from './styles';
import { Button, Modal } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';

import * as UserActions from '../../store/modules/user/actions';


function TableComponent({ users, removeUser }) {
  const [showModal, setShowModal] = useState(false);
  const [userModal, setUserModal] = useState('');
  console.log(UserActions);
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
                <tr key={user.name}>
                  <td>{user.name}</td>
                  <td>{user.peso}</td>
                  <td>{user.altura}</td>
                  <td id="actions-cell">
                    <button id="delete-button"
                      onClick={() => removeUser(user.name)}
                      type="button"
                    >
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);

