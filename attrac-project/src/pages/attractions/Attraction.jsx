import React from 'react'
import s from './attraction.module.scss'

const Attraction = () => {
  return (
    <div>
      <main className={s.card}>
           
           <div className={s.wrap}></div>
           <div className={s.content__container}>
               <h1 className={s.content__title}>Самые популярные достопримечательности</h1>
               <div className={s.content}>

               </div>
           </div>
           <div className={s.pagination}></div> 
           <section className={s.find}>
               <div className={s.find__container}>
                   <div className={s.find__finder}>
                       <h2 className={s.find__sub_title}>Все достопремичательности</h2>
                       <div className={s.find__block}>
                           <input type="text" id="searchInfo" className={s.find__input} placeholder="Поиск" />
                           <label htmlFor="searchInfo" className={s.find__label}>Сортировка по</label>
                           <select name="card-finder" id="card-finder">
                               <option value="">всем</option>
                               <option value="park">паркам</option>
                               <option value="building">постройкам</option>
                           </select>
                       </div>
                   </div>
                   <div className={s.find__block_card}>
                       <section className={s.section}>
                           <button className={s.section__button}>Связаться с нами</button>
                       </section>
                   </div>
                   <section className={s.comment}>
                       <div className={s.comment__container}>
                           <div className={s.comment__wrap}>
                               <h2 className={s.comment__title}>Отзывы</h2>
                               <div className={s.comment__content}>

                               </div>
                           </div>
                       </div>
                   </section>
               </div>
           </section>
       </main>
    </div>
  )
}

export default Attraction;
