import { Link } from "react-router"
import s from './home.module.scss'
import Slider from "../../components/slide/Slide"
import { useState } from "react";

export const Home = () => {
    const slides = [
        { image: './src/assets/optimize.webp', title: 'Бульвар Энтузиастов' },
        { image: './src/assets/Монумент_Родина-Мать.jpg', title: 'Родина Мать' },
        { image: './src/assets/i.webp', title: 'Площадь Азатлык' },
      ];
    
    return (
        <main>
            <section className={s.main}>
            <div className={s.main__container}>
                <div className={s.main__wrap}>
                    <h1 className={s.main__title}>НАБЕРЕЖНЫЕ ЧЕЛНЫ</h1>
                    <p className={s.main__sub_text}>Твой гид онлайн</p>
                    <Link className={s.main__btn} to={"#"}>Узнать больше</Link>
                </div>
            </div>
        </section>
        <section>
        <div>
            <Slider slides={slides} />
        </div>
        </section>
        <section className={s.about}>
            <div className={s.about__container}>
                <div className={s.about__wrap}>
                    <div className={s.about__text_block}>
                        <h2 className={s.about__title}>Набережные Челны:<br/>город, знаменитый на весь мир</h2>
                        <p className={s.about__text}>Город Набережные Челны знаменит на весь мир. Ведь именно здесь собирают грузовики, которые много раз выигрывали ралли «Дакар», именно здесь находится единственная в мире площадь имени Высоцкого с памятником в его честь, а также Боровецкая корабельная роща, частично сохранённая. Отсюда в течение XVII–XIX веков везли мачтовую сосну в Казань, Астрахань и в другие города России.</p>
                    </div>
                    <img className={s.about__pic} src="./src/assets/kam.jpg" alt="" />
                </div>
            </div>
        </section>
        <section className={s.map}>
            <script type="text/javascript" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ada81bae3ead1eefdb75073bbd63f35f9e54c831e2a973f39e3d064f48394f21b&amp;width=654&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
        </section>
        </main>
    )
}