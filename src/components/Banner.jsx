import React from 'react';
import styled from 'styled-components';
// import { ShoppingCartIcon } from '@mui/icons-material/ShoppingCart';


const Span = styled.span`
color:#212121;

`

const Bannerbox =styled.div`
color:#fff;
padding:5px;
text-align:center;
font-size:1rem;
font-weight:bold;
background: rgb(238,174,202);
background: linear-gradient(303deg, rgba(238,174,202,1) 4%, rgba(157,187,202,1) 83%);
@media(max-width:${({theme})=> theme.mobile}){
    display:none;
}
`

const Banner = () => {
    return (
        <Bannerbox>
           Spend <Span>£40</Span> online to receive <Span>Free</Span> UK delivery 
        </Bannerbox>
        // x버튼 달까요?
        
    );
}

export default Banner;

