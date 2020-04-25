import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/Reactotron'; // precisa estar antes da importação do store

import GlobalStyle from './styles/global';

import Routes from './routes';
import history from './services/history';
import store from './store';

import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
