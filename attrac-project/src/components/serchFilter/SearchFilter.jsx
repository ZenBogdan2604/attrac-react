import React, { useState, useEffect } from 'react';
import s from './searchfilter.module.scss';

const SearchFilter = () => {
  const [content, setContent] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [selectedCategory, setSelectedCategory] = useState(''); 

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('https://672dfd95fd89797156449049.mockapi.io/Monument');
        const data = await response.json();
        setContent(data);
    };
    fetchData();
  }, []);

  const filterCards = () => {
    return content.filter((item) => {
      const categoryMatch = !selectedCategory || (item.filter && item.filter.includes(selectedCategory));
      const titleMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && titleMatch;
    });
  };

  const handleCardClick = (item) => {
    const params = new URLSearchParams({
      title: item.title,
      img: item.img,
      details: item.details,
      map: item.map,
      addres: item.addres,
    });
    window.location.href = `info.html?${params}`;
  };

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

      {filterCards().map((item) => (
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