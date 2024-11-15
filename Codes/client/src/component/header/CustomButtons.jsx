import React, { useState, useContext } from 'react';
import { Box, Typography,  Button, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';


import { DataContext } from '../../context/DataProvider';

//components 
import LoginDialog from '../login/LoginDialog';
import BecomeSeller from '../BecomeSeller/BecomeSeller';

import Profile from './Profile';

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > *': {
        marginRight : 40,
        fontsize : 16,
        alignItems : 'center'
    },
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}));
    

const Container = styled(Box)(({theme}) =>({
    display: 'flex',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}));

const LoginButton = styled(Button)
`
    background-color: #051922;
    color: #FFA500;
    text-transform: none;
    padding: 5px 100px;
    border-radius: 2px;
    Box-shadow: none;
    font-weight: 0;
    height: 32px;
    justify-content: center;

`;

const SellerButton = styled(Button)
`
    background-color: #051922;
    color: #FFF;
    text-transform: none;
    padding: 0px 0px;
    border-radius: 2px;
    Box-shadow: none;
    font-weight: 0;
    height: 32px;
    justify-content: center;

`;

const SellerButton = styled(Button)
`
    background-color: #051922;
    color: #FFF;
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

    const [open2, setOpen2] = useState(false);

    const openDialog2 = () => {
        setOpen2(true);
    }

    return (
        <Wrapper>

            {
                account ? <Profile account={account} setAccount={setAccount}/> : 
                <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
            }

            <SellerButton variant="contained" onClick={() => openDialog2()}>Become a Seller</SellerButton>
            <Typography style={{ marginTop: 3, color: '#ffffff' }}>More</Typography>
            <Container>
                <CartIcon>
                <ShoppingCart />
                </CartIcon>
                
                <Typography style={{color: '#ffffff'}}> Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
            <BecomeSeller open={open2} setOpen={setOpen2}/>
        </Wrapper>
    )
}

export default CustomButtons;