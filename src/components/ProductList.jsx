import React from 'react'

import {useGetProductsQuery} from '../redux/features/productsApi';
// import ProductCard from './ProductCard';
// import {products} from './data';
import styled from "styled-components";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
function ProductList() {
    const { data, error,isError,isLoading,isSuccess} = useGetProductsQuery(); // fetch 상품데이터
    console.log("Api", isLoading);
    console.log("data",data); // 페이로드는 가져오는 데 왜 여기는 안뜸니까
    return (
        <Container>
            {isLoading && "loading..."}
            {isError && error.message}
            {isSuccess && data && data.map(item =>
                <h3 key={item.id}>{item.title}</h3>)}
            {/* {isLoading ? 
                <p>...loading</p>
             : error?
                <p>An error occured...</p>
             : 
             <>
             {data?.map(item=>
             < div key={item.id}>{item.title}</div>
                //  <ProductCard item={item} key={item.id}/>
             )}
             </>
            } */}
        </Container>
    )
}

export default ProductList
