import React, { useState, useEffect } from 'react';
import s from './pagination.module.scss'; 

const Pagination = () => {
  const [content, setContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 5;

  useEffect(() => {
    initialLoad();
  }, []);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    setIsLoading(true);
      const url = new URL('https://672dfd95fd89797156449049.mockapi.io/Monument');
      url.searchParams.append('page', page);
      url.searchParams.append('limit', itemsPerPage);
      const response = await fetch(url);
      const data = await response.json();
      setContent(data);
  };

  const initialLoad = async () => {
    setIsLoading(true);
      const totalCountResponse = await fetch('https://672dfd95fd89797156449049.mockapi.io/Monument?popularity=true');
      const totalData = await totalCountResponse.json();
      const totalPages = Math.ceil(totalData.length / itemsPerPage);
      setTotalPages(totalPages);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className={s.content}>
        {content.map((item) => (
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

      <div className={s.pagination}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={s.paginationButton}
            onClick={() => handlePageClick(page)}
          >{page}</button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;