import React from 'react';
import { useLocation, useNavigate } from 'react-router'; 
import s from './CardInfo.module.scss'; 

const CardInfo = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const data = {
    title: searchParams.get('title'),
    img: searchParams.get('img'),
    details: searchParams.get('details'),
    map: searchParams.get('map'),
    addres: searchParams.get('addres'),
  };

  return (
    <div className={s.cardInfo}>
      <img className={s.cardImg} src={data.img} alt={data.title} />
      <h2 className={s.cardTitle}>{data.title}</h2>
      <p className={s.cardText}>{data.details}</p>
      <div className={s.cardMap}>
        <iframe
          src={data.map}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
          title="Карта"
        ></iframe>
      </div>
      <p className={s.cardAdd}>{data.addres}</p>
      <button className={s.backBtn} onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
};

export default CardInfo;