import React, { useState } from 'react';


import { Container } from './styles';

export default function Home() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');


  return (
    <Container>
      <div id="info-container" className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Preencha suas informações</h2>
            <form id="form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  className="form-control"
                  id="cpf"
                  value={cpf}
                  onChange={e => setCpf(e.target.value)}
                />
                <button type="button" id="button-form" class="btn btn-danger">Salvar dados</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}