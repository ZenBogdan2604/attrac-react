import React from 'react';
import s from './contact.module.scss'
import { Link } from 'react-router';

export const Contact = () => {
    return(
        <>
            <main className={s.contacts}>
                <div className={s.contacts__container}>
                    <div className={s.contacts__wrap}>
                        <div className={s.contacts__block}>
                            <p className={s.contacts__email}>zenbog2008@gmail.com</p>
                            <p className={s.contacts__email}>+7(951)061-19-13</p>
                            <button className={s.section__button} id='modal__btn'>Open</button>
                            <div className={`${s.modal} ${s.hide}`} id='modal'>
                                <div className={s.modal__content}>
                                    <div className={`${s.modal} ${s.modal1}`}>
                                        <div className={s.modal__main}>
                                        <h2 className={s.modal__title}>Связаться со мной</h2>
                                        
                                        <div className={s.modal__container}>
                                            <input type='email' placeholder='Ваш email' className={s.modal__email} />
                                            <input type='text' placeholder='Ваш вопрос' className={s.modal__text} />
                                        </div>
                                    
                                        <Link to={''}><button className={s.modal__btn}>Отправить</button></Link>
                                        <button id='modal__close' className={s.modal__close}>&#10006;</button>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
