import React from 'react';
import styled from 'styled-components';
import {Badge,Button} from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import SearchIcon from '@mui/icons-material/Search';//계속 오류남

const Navbar = () => {
    return (
        <Wrapper>
            <h3>SQUID SHOP</h3>
             <div>
                 <Searchbox/>
             </div>
             {/* <SearchIcon /> */}
             <TopmenuItem>
                 <Button sx={{color:"#212121"}}>LOGIN</Button>
                 <Button>SIGN UP</Button>
                 <Badge badgeContent={3} color="warning"><ShoppingCartIcon/></Badge>
             </TopmenuItem>


        </Wrapper>
    );
}

export default Navbar;


const Wrapper = styled.div `
background:#db1471;
height:2rem;
widht:100vw;
padding:1rem 2rem;
display:flex;
justify-content:space-between;
align-items:center;
`;
const Searchbox = styled.input`
max-width:25rem;
padding:0.5rem;
border:none;
border-radius:5px;
`;
const TopmenuItem =styled.div`
color:#fff;
font-size:2rem;
font-weight:bold;
`;