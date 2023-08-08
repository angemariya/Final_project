import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { useEffect, useMemo } from 'react';

const modalWindow = document.getElementById('modal');

export const Modal = (props) => {
    const { open, onClose } = props;
    
    const element = useMemo(() => document.createElement("div"), []);

    useEffect(() => {
        if (open) {
            modalWindow.appendChild(element);
            return () =>  modalWindow.removeChild(element)
        }  
    })

    if (open) {
            return createPortal(
                <div className={styles.modalBackground} onClick={onClose}>
                    <div className={styles.modalWindow}>{props.children}</div>
                </div>,
                element
        )
    }
    return null;
}