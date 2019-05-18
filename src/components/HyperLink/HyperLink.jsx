import React from 'react';
import PropTypes from 'prop-types';

const HyperLink = ({ href, className, ...props }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {props.children}
    </a>
  );
};

HyperLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default HyperLink;
