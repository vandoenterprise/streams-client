import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ actions, content, onDismiss, title }) => {
    return createPortal(
        <div onClick={onDismiss} className="ui dimmer modals visible active">
            <div onClick={event => event.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{title}</div>
                <div className="content">{content}</div>
                <div className="actions">{actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;
