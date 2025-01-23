import React, { useState } from 'react';
import { NavLink } from 'react-router';
import s from './Header.module.scss';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className={s.header}>
                <div className={s.header__container}>
                    <div className={s.header__wrap}>
                        <div className={s.header__logo_block}>
                            <NavLink to={""}>
                                <img src="./img/Group.svg" alt="" className={s.header__logo} />
                            </NavLink>
                            <NavLink to={""} className={s.header__name}>Toxin</NavLink>
                        </div>
                        <div className={s.header__menu}>
                            <NavLink className={s.header__menu_btn} to={"./contacts"}>Контакты</NavLink>
                            <NavLink className={s.header__menu_btn} to={"./attractions"}>Достопримечательности</NavLink>
                        </div>
                        <NavLink to={"./signin.html"} className={s.header__btn}>Войти</NavLink>
                        <div
                            className={`${s.header__menu_btn_burger} ${isMenuOpen ? s.active : ''}`}
                            onClick={toggleMenu}
                        >
                            <span className={s.bar}></span>
                            <span className={s.bar}></span>
                            <span className={s.bar}></span>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`${s.modal} ${isMenuOpen ? '' : s.hide}`}>
                <div className={s.modalContent}>
                    <label id={s.modalClose} onClick={closeMenu}>&#10006;</label>
                    <NavLink className={s.modalLink} to={"./contacts"} onClick={closeMenu}>Контакты</NavLink>
                    <NavLink className={s.modalLink} to={"./attractions"} onClick={closeMenu}>Достопримечательности</NavLink>
                    <NavLink className={s.modalLink} to={"./signin.html"} onClick={closeMenu}>Войти</NavLink>
                </div>
            </div>
        </>
    );
};