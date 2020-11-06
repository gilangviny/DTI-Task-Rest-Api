/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CoronaNews } from '../../components';

const InfoCorona = () => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  return (
    <div className="pageInfoCorona-wrapper">
      <CoronaNews />
    </div>
  );
};

export default InfoCorona;
