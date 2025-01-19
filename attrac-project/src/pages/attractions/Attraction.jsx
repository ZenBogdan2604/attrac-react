import React from 'react'
import s from './attraction.module.scss'
import Pagination from '../../components/pagination/Pagination'
import SearchFilter from '../../components/serchFilter/SearchFilter'

const Attraction = () => {
  return (
    <div>
      <main className={s.card}>
           
           <div className={s.wrap}></div>
           <div className={s.content__container}>
               <h1 className={s.content__title}>Самые популярные достопримечательности</h1>
               <div className={s.content}>
                <Pagination />
               </div>
           </div>
           <div className={s.pagination}></div> 
           <section className={s.find}>
               <div className={s.find__container}>
                   <div className={s.find__finder}>
                       <h2 className={s.find__sub_title}>Все достопремичательности</h2>
                       <div className={s.find__block}>
                           
                           <SearchFilter />
                       </div>
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