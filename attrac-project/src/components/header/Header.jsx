import { NavLink } from 'react-router'
import s from './Header.module.scss'

export const Header = () => {
    return (
        <>
        <header className={s.header}>
        <div className={s.header__container}>
            <div className={s.header__wrap}>
                <div className={s.header__logo_block}>
                    <NavLink to={""}><img src="./img/Group.svg" alt="" className={s.header__logo}/></NavLink>
                    <NavLink to={""} className={s.header__name}>Toxin</NavLink>
                </div>
                <div>
                    
                </div>
                <div className="header__menu">    
                    <NavLink className={s.header__menu_btn} to={"./contacts"}>Контакты</NavLink>
                    <NavLink className={s.header__menu_btn} to={"./attractions"}>Достопримечательности</NavLink>
                </div>
                <NavLink to={"./signin.html"} className={s.header__btn}>Войти</NavLink>
                <div className={s.header__menu_btn_burger}>
                    <span className={s.bar}></span>
                    <span className={s.bar}></span>
                    <span className={s.bar}></span>
                </div>
            </div>
        </div>
    </header>
        </>
    )
}