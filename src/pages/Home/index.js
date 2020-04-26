import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Alert, Button   } from 'react-bootstrap';
import { Container } from './styles';

function Home({ dispatch }) {
  const [peso, setPeso] = useState('');
  const [name, setName] = useState('');
  const [altura, setAltura] = useState('');
  const [show, setShow] = useState(false);


  function handleAddUser(){
    dispatch({
      type: 'ADD_USER',
      user: {
        name,
        peso,
        altura
      },
    });

    setShow(true);
    setPeso('');
    setName('');
    setAltura('');

  }

  return (
    <Container>
      <div id="info-container" className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center">Preencha suas informações</h2>
            <form id="form">
              <div className="form-group">

                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="peso">Peso</label>
                <input
                  type="text"
                  id="peso"
                  className="form-control"
                  value={peso}
                  onChange={(e)=> setPeso(e.target.value)}
                />
                <label htmlFor="altura">Altura</label>
                <input
                  type="text"
                  className="form-control"
                  id="altura"
                  value={altura}
                  onChange={e => setAltura(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => handleAddUser()}
                  id="button-form" class="btn btn-danger"
                >
                  Salvar dados
                </button>
              </div>
            </form>
              <Alert show={show} variant="success" className="col-md-6">
                  <Alert.Heading>Ótimo!</Alert.Heading>
                  <div id="alert-success" >
                    <p>
                      Dado cadatrado com sucesso!
                    </p>
                    <Button onClick={() => setShow(false)} variant="outline-success">
                      Fechar
                    </Button>
                  </div>
              </Alert>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default connect()(Home);
