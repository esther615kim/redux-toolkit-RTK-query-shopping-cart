import React from 'react';
import styled from 'styled-components';
import {Badge,Button} from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from '@mui/icons-material/Search'; // 이거 어떻게 하라고 했더라?

const Navbar = () => {
    return (
        <Wrapper>
            <h4>SQUID SHOP</h4>
             <div>
             <input placeholder="trendy winter coat"/>
             <SearchIcon />
             </div>
             <TopmenuItem>
                 <Button>LOGIN</Button>
                 <Button>SIGN UP</Button>
                 <Badge badgeContent={3} color="warning"><ShoppingCartIcon/></Badge>
             </TopmenuItem>
        </Wrapper>
    );
}

export default Navbar;

const Wrapper = styled.div `
height:2rem;
widht:100vw;
padding:1rem 2rem;
display:flex;
justify-content:space-between;
align-items:center;

h4{
    @media(max-width:${({theme})=> theme.mobile}){
        font-size:12px;
    } 
}

div{
    display:flex;
    align-items:center;
    input{
        max-width:400px;
        text-align:center;
        padding:0.5rem;
        outline:none;
        border:none;
        border-bottom:1.5px solid #212121;
    }
}
`;

const TopmenuItem = styled.div`
font-size:2rem;
font-weight:bold;
Button{
    color:#212121;
    font-weight:bold;
    @media(max-width:${({theme})=> theme.mobile}){
        display:none;
    }
}
`;

