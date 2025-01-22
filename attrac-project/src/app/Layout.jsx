import { Link, Outlet } from "react-router"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { Fragment, useState } from "react"
import s from './layout.module.scss'


export const Layout = () => {
    const [ isDark, setIsDark ] = useState(true);
    
    const onClickHandler = () => {
        setIsDark(!isDark);
    }
    return( 
    <div className={`wrapper  ${isDark ? s.light : s.dark}`}>
        <Link className={s.button_to_dark} onClick={onClickHandler}>Переключить тему</Link>
        <Header />
        <main className={s.main}>
            <Outlet />
        </main>
        <Footer />
    </div>
    )
}