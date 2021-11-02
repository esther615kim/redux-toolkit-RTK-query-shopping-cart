import React from 'react'
import ProductCard from './ProductCard';
import {products} from './data';
import styled from "styled-components";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
function ProductList() {
    return (
        <Container>
            {products.map((item)=>{
                return <ProductCard item={item} key={item.id}/>
            })}
        </Container>
    )
}

export default ProductList
