import React from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

import Container from '../pages/_layouts/Container';

export default function routes({ component: Component, ...rest }) {

  const Layout = Container;

  return (
    <Layout>
      <Route {...rest} component={Component} />
    </Layout>
  );
}

routes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
}
