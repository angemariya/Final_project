import { createPortal } from 'react-dom';
import { useEffect, useMemo } from 'react';
import styles from './Modal.module.css';

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
                    <div className={styles.modalWindow}>
                        {props.children}
                        <button className={styles.modalWindowButton}onClick={onClose}>Close</button>
                    </div>
                </div>,
                element
        )
    }
    return null;
}