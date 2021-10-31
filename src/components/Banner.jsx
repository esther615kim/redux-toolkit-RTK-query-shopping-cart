import React from 'react';
import styled from 'styled-components';

const Banner = () => {
    return (
        <Bannerbox>
           Spend £40 online to receive FREE UK DELIVERY 
        </Bannerbox>
    );
}

export default Banner;

const Bannerbox =styled.div`
padding:5px;
text-align:center;
font-size:1rem;
font-weight:bold;
background:#eee;
color:#212121;
`;
