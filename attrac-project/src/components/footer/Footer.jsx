import { Link } from "react-router"
import s from './Footer.module.scss'

export const Footer = () => {
    return (
        <>
            <footer className={s.footer}>
                <div className={s.footer__container}>
                    <div className={s.footer__wrap}>
                        <div className={s.footer__blocks}>
                            <div className={s.footer__block}>
                                <p className={s.footer__title}>Навигация</p>
                                <ul>
                                    <li><Link className={s.footer__text} to={"./attrac.html"}>Достопримечательности</Link></li>
                                    <li><Link className={s.footer__text} to={"./contacts.html"}>Контакты</Link></li>
                                </ul>
                            </div>
                            <div className={s.footer__block}>
                                <p className={s.footer__title}>Достопримечательности</p>
                                <ul>
                                    <li><Link className={s.footer__text} to={"./attrac.html"}>Перейти</Link></li>
                                </ul>
                            </div>
                            <div className={s.footer__block}>
                                <p className={s.footer__title}>Контакты</p>
                                <ul>
                                    <li><Link className={s.footer__text} to={"./contacts.html"}>Перейти</Link></li>
                                </ul>
                                
                            </div>
                            
                        </div>
                        <hr className={s.footer__hr}/>
                        <div className={s.footer__under}>
                            <div className={s.footer__logo_block}>
                                <img src="./img/Group.svg" alt="" className={s.footer__logo}/>
                                <h2 className={s.footer__logo}>Toxin</h2>
                            </div>
                            <p className={s.footer__sub_text}>Все права защищены</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}