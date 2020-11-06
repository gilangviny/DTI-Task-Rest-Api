/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import app from '../../services/firebase';
import Posts from './posts';
import 'firebase/database';

const CoronaNews = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    setIsLoading(true);
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setPosts(firebaseNews.data);
      setIsLoading(false);
    });
  }, []);

  console.log(posts);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Info Corona</h1>
      <Posts posts={posts} loading={isLoading} />
    </div>
  );
  // console.log('postActivity');
};

export default CoronaNews;
