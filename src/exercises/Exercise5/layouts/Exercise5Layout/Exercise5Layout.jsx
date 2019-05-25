import React from 'react';

const Exercise5Layout = props => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };
  return <div style={style}>{props.children}</div>;
};

export default Exercise5Layout;
