import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import s from './searchfilter.module.scss';

const API_URL = 'https://672dfd95fd89797156449049.mockapi.io/Monument';

const fetchData = async ({ queryKey }) => {
  const [, searchQuery, selectedCategory] = queryKey;
  const url = new URL(API_URL);

  if (searchQuery) {
    url.searchParams.append('title', searchQuery);
  }
  if (selectedCategory) {
    url.searchParams.append('filter', selectedCategory);
  }

  const response = await fetch(url);
  return response.json();
};

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const {data: content = [],isLoading} = useQuery({
    queryKey: ['monuments', searchQuery, selectedCategory],
    queryFn: fetchData,
  });

  const handleCardClick = (item) => {
    const params = new URLSearchParams({
      title: item.title,
      img: item.img,
      details: item.details,
      map: item.map,
      addres: item.addres,
    });
    navigate(`/card-info?${params}`);
  };

  if (isLoading) {
    return <div className={s.loading}>Загрузка...</div>;
  }

  return (
    <div className={s.find__block_card}>
      <div className={s.find__block}>
        <input
          type="text"
          id="searchInfo"
          className={s.find__input}
          placeholder="Поиск"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <label htmlFor="searchInfo" className={s.find__label}>
          Сортировка по
        </label>
        <select
          name="card-finder"
          id="card-finder"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">всем</option>
          <option value="park">паркам</option>
          <option value="building">постройкам</option>
        </select>
      </div>

      {content.map((item) => (
        <section
          key={item.id}
          className={s.card__pag}
          onClick={() => handleCardClick(item)}
        >
          <div className={s.card__card}>
            <div className={s.card__card_block}>
              <img
                className={s.card__card_pic}
                src={item.img}
                alt={item.title}
              />
              <p className={s.card__card_txt_pic}>{item.title}</p>
            </div>
            <p className={s.card__card_txt}>{item.text}</p>
            <p className={s.card__card_add}>{item.addres}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default SearchFilter;