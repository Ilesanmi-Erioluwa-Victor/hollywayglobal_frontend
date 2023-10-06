import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({
  children,
}: {
  children: JSX.Element | React.ReactNode | JSX.Element[];
}) => {
  return ReactDOM.createPortal(
    <div>
      <div>{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
