import React, { useState } from 'react'
import s from './modal.module.scss'

const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <button className={s.modalBtn} onClick={openModal}>
                Открыть
            </button>

            <div className={`${s.modal} ${isModalOpen ? '' : s.hide}`}>
                <div className={s.modalContent}>
                    <label id={s.modalClose} onClick={closeModal}>&#10006;</label>
                    <p>Modal window</p>
                    <input className={s.modalInput} type="text" name="" id="" />
                    <input className={s.modalInput} type="text" name="" id="" />
                </div>
            </div>
        </div>
  )
}

export default Modal;
