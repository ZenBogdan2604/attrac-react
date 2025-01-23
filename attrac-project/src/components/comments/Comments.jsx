import React from 'react';
import { useQuery } from '@tanstack/react-query';
import s from './comments.module.scss'; 

const API_URL = 'https://672dfd95fd89797156449049.mockapi.io/comment'

const fetchComments = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

const CommentList = () => {
  const { data: comments, isLoading } = useQuery({
    queryKey: ['comments'],
    queryFn: fetchComments,
  });

  if (isLoading) {
    return <div>Загрузка комментариев...</div>;
  }

  return (
    <div className={s.commentContent}>
      {comments.map((comment) => (
        <div key={comment.id} className={s.commentItem}>
          <div className={s.commentAvatarBlock}>
            <img
              className={s.commentImg}
              src={comment.img}
              alt={comment.name}
            />
            <p className={s.commentName}>{comment.name}</p>
          </div>
          <p className={s.commentText}>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;

