/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { productService } from '../services';

const Product = () => {
  const [dataProduct, setDataProduct] = useState([]);
  // const [searchKey, setSearchKey] = useState('');
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [searchKey, setSearchKey] = useState('');
  const [productLoading, setProductDataLoading] = useState(false);

  useEffect(() => {
    setProductDataLoading(true);
    productService
      .productService(limit, offset, searchKey)
      .then((res) => {
        setDataProduct(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setProductDataLoading(false);
      });
  }, [limit, offset, searchKey]);

  const listProduct = dataProduct.map((data) => {
    return (
      <ul key={data.id}>
        <li>{data.name}</li>
        <ul key={data.id}>
          <li>{data.variants[0].slug}</li>
        </ul>
      </ul>
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search.."
        onChange={(e) => {
          setSearchKey(e.target.value);
        }}
      />
      {productLoading ? <p>product Loading...</p> : listProduct}
    </div>
    // <div>
    //   <h1>haii</h1>
    // </div>
  );
};

export default Product;
