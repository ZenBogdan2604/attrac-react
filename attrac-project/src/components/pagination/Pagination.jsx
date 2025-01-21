import React, { useEffect, useState } from 'react';
import s from './pagination.module.scss';
import { useQuery } from '@tanstack/react-query';

const API_URL = 'https://672dfd95fd89797156449049.mockapi.io/Monument';

const getData = async (page, itemsPerPage) => {
  const response = await fetch(`${API_URL}?page=${page}&limit=${itemsPerPage}`);
  const data = await response.json();
  return data;
};



const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const[length, setLength] = useState(0)
  const [totalPages, setTotalPages ] = useState(Math.ceil(length.length / itemsPerPage))
   // Количество элементов на странице

 

  // Используем useQuery для загрузки данных
  const { data, isLoading } = useQuery({
    queryKey: ['items', currentPage], // Ключ запроса зависит от currentPage
    queryFn: () => getData(currentPage, itemsPerPage),
  });

  const getAllData = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    setLength(data.length);
  };
  useEffect(() => {
    getAllData()
    
  }, [])
  // Если данные загружаются, показываем индикатор загрузки
  if (isLoading) {
    return <div className={s.loading}>Loading...</div>;
  }

  // const totalPages = Math.ceil(length.length / itemsPerPage); // Предполагаем, что всего 50 элементов
 console.log(length)
  return (
    <div>
      <div className={s.content}>
        {data.map((item) => (
          <section key={item.id} className={s.cardPag}>
            <div className={s.cardCard}>
              <img className={s.cardCardPic} src={item.img} alt={item.title} />
              <p className={s.cardCardTxtPic}>{item.title}</p>
              <p className={s.cardCardTxt}>{item.text}</p>
              <p className={s.cardCardAdd}>{item.addres}</p>
            </div>
          </section>
        ))}
      </div>

      {/* Пагинация */}
      <div className={s.pagination}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`${s.paginationButton} ${currentPage === page ? s.active : ''}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;