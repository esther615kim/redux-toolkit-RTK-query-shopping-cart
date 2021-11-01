import React from 'react'
import styled from 'styled-components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function Slides() {
    return (
        <Wrapper >
            <Chevron direction="left">
                <ChevronLeftIcon sx={{fontSize:30}}/>
            </Chevron>

            <Chevron direction="right">
                <ChevronRightIcon sx={{fontSize:30}}/>
            </Chevron>
        </Wrapper>
    )
}

//full-width banner
const Wrapper =styled.div`
width:100%;
display:flex;
height:40vh;
background:#ccc;
postion:relative;
`
const Chevron = styled.div`
width:2rem;
height:2rem;
background:#fff;
border-radius:50%;
position:absolute;
// 이거 위치 맘에 안듦
top:16rem;
&:hover {
    transform:scale(1.05);
}
`