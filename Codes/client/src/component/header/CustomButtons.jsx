import React, { useState, useContext } from 'react';
import { Box, Typography,  Button, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';


import { DataContext } from '../../context/DataProvider';

//components 
import LoginDialog from '../login/LoginDialog';

import Profile from './Profile';



const Wrapper = styled(Box)
`
    display: flex;
    margin: 0 3% 0 auto;
    & > button, & > p , & > div {
        margin-right: 40px;
        font-size: 16px;
        align-items: center;
    }
`;

const Container = styled(Box)
`
    display: flex;
`;

const LoginButton = styled(Button)
`
    background-color: #051922;
    color: #FFA500;
    text-transform: none;
    padding: 0px 0px;
    border-radius: 2px;
    Box-shadow: none;
    font-weight: 0;
    height: 32px;
    justify-content: center;

`;

const CartIcon = styled(Box)`
    color: #ffffff;
    padding: 5px;
`;


const CustomButtons = () => {

    const [open, setOpen] = useState(false);

    const {account,setAccount} = useContext(DataContext);

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>

            {
                account ? <Profile account={account} setAccount={setAccount}/> : 
                <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
            }

            
                
            <Typography style={{ marginTop: 3, width: 135, color: '#ffffff' }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3, color: '#ffffff' }}>More</Typography>
            <Container>
                <CartIcon>
                <ShoppingCart />
                </CartIcon>
                
                <Typography style={{color: '#ffffff'}}> Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons;