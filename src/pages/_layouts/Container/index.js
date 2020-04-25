import React from 'react';

import { Content } from './styles';

import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <Content>{children}</Content>;
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
}

