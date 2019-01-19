import React from 'react';
import ReactDOM from 'react-dom';

// note that we handle events on child elements because events get passed to parents if no handling
// this is propagation, and we are stopping it
// could do something like () => history.push('/')
const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">{props.title}</div>
        <div className="content">
          {props.content}
        </div>
        <div className="actions">
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
