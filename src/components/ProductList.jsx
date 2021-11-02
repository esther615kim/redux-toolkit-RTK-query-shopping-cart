import React from 'react'

import {useGetProductsQuery} from '../redux/features/productApi';
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
    const { data, error, isLoading} = useGetProductsQuery(); // fetch 상품데이터
    console.log("Api", isLoading);
    console.log("data",data);
    return (
        <Container>
            {isLoading ? 
                <p>...loading</p>
             : error?
                <p>An error occured...</p>
             : 
             <>
             {data?.map(item=>
                 <h3 key={item.id}>{item.title}</h3>
             )}
             </>
            }
        </Container>
    )
}

export default ProductList
