import React from 'react';
import { Slides, ProductList } from '../components/index';
import { useGetProductsQuery } from '../redux/features/productsApi';
const Home = () => {
  //   const { data, error, isLoading } = useGetProductsQuery;
  const { data } = useGetProductsQuery;
  console.log(data);
  return (
    <div>
      <Slides />
      <ProductList />
      <div>{data}</div>
    </div>
  );
};

export default Home;
