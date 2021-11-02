import React from 'react';
import {useGetProductsQuery} from '../redux/features/productApi';

function ProductCard() {
    const { data, error, isLoading} = useGetProductsQuery(); // fetch 상품데이터

    return (
        <div>
            <p>{data}</p>
        </div>
    )
}

export default ProductCard;
