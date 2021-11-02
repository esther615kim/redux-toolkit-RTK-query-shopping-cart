//work flow
//UI => container,
import React from 'react';
// import {useGetProductsQuery} from '../redux/features/productApi';
import styled from "styled-components";
// import { SearchIcon } from '@mui/icons-material/Search';

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 180px;
  height: 250px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  border:1px solid #eee;
  border-radius:10px;
  padding:10px;
  h5{
      color:#212121;
      width:80%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  p{
      margin-top:10px;
      color:#aaa;
      font-size:12px;
      
  }
`;

const Image = styled.img`
height:50%;
overflow:wrap;

`;

function ProductCard({item}) {
    console.log(item);
    // const { data, error, isLoading} = useGetProductsQuery(); // fetch 상품데이터
    return (
        <Container>
            <Image src={item.image}/>
            <h5>{item.title}</h5>
            <p>${item.price}</p>
        </Container>
    )
}

export default ProductCard;
