import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {
  const style = {
    transform: props.show ? 'translate(-50%, -50%)' : 'translate(-50%, -100vh)',
    opacity: props.show ? '1' : 0
  };

  return useMemo(
    () => (
      <>
        <Backdrop show={props.show} clicked={props.closed} />
        <div className={styles.Modal} style={style}>
          {props.children}
        </div>
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.show]
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool.isRequired,
  closed: PropTypes.func.isRequired
};

export default Modal;
