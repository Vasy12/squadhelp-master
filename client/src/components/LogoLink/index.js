import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../constants.js';

const LogoLink = ({to, ...props}) => {
  return (
    <Link to={to}>
      <img {...props}/>
    </Link>
  );
};

LogoLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

LogoLink.defaultProps = {
  to: '/',
  src: `${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`,
  alt: 'logo',
};

export default LogoLink;