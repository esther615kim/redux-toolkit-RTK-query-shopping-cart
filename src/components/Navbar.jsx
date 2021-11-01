import React from 'react';
import styled from 'styled-components';
import {Badge,Button} from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from '@mui/icons-material/Search';//계속 오류남

const Navbar = () => {
    return (
        <Wrapper>
            <h3>SQUID SHOP</h3>
             <SearchBox>
             <SearchInput placeholder="trendy winter coat"/>
             <SearchIcon />
             </SearchBox>
             <TopmenuItem>
                 {/* Topbutton styled components not working...why? */}
                 <TopButton sx={{color:"#212121",fontWeight:"bold"}}>LOGIN</TopButton>
                 <Button sx={{color:"#212121",fontWeight:"bold"}}>SIGN UP</Button>
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
`;
const SearchBox = styled.div`
display:flex;
align-items:center;`

const SearchInput = styled.input`
max-width:400px;
text-align:center;
padding:0.5rem;
outline:none;
border:none;
border-bottom:2px solid #212121;
`;
const TopmenuItem = styled.div`
font-size:2rem;
font-weight:bold;
`;

const TopButton =styled(Button)`
color:#212121;
font-weight:bold;
`;