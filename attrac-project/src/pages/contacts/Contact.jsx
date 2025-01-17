import React from 'react';
import s from './contact.module.scss'
import { Link } from 'react-router';
import Modal from "../../components/modal/Modal";

export const Contact = () => {
    return(
        <>
            <main className={s.contacts}>
                <div className={s.contacts__container}>
                    <div className={s.contacts__wrap}>
                        <div className={s.contacts__block}>
                            <p className={s.contacts__email}>zenbog2008@gmail.com</p>
                            <p className={s.contacts__email}>+7(951)061-19-13</p>
                            <Modal />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
