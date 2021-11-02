
import React from 'react';
import styled from "styled-components";
// import { SearchIcon } from '@mui/icons-material/Search';

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 340px;
  height: 360px;
  display: flex;
  flex-direction:column;
  align-items: center;
  text-align:center;
  justify-content: center;
  border:1px solid #eee;
  padding:5px;
  border-radius:10px;

  @media(max-width:${({theme})=> theme.mobile}){
    min-width: 200px;
  height: 220px;
       
    } 
  h5{
    //   2줄 후 말줄임표로
      color:#212121;
      width:80%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  p{
      margin-top:10px;
      color:#aaa;
      font-size:14px;
      font-weight:bold;
  }
`;

const Image = styled.img`
height:50%;
max-width:10em;
`

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
