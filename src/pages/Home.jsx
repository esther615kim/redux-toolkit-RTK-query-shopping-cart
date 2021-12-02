import React from 'react';
import { Slides, ProductList } from '../components/index';
import { useGetProductsQuery } from '../redux/features/productsApi';
const Home = () => {
  const { data, error, isLoading } = useGetProductsQuery;
  return (
    <div>
      <Slides />
      <ProductList />
    </div>
  );
};

export default Home;
