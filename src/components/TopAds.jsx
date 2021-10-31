import React from 'react'
import styled from 'styled-components';

//full-width banner
const Wrapper =styled.div`
width:100%;
height:50vh;
display:flex;
border:1px solid blue;
`

export default function TopAds() {
    return (
        <Wrapper >
            상단광고배너🎉🎉🎉
        </Wrapper>
    )
}


const TopmenuItem =styled.div`
color:#fff;
font-size:2rem;
font-weight:bold;
`;