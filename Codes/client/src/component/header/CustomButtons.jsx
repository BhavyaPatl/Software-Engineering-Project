import React, { useState, useContext } from 'react';
import { Box, Typography,  Button, styled, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DataContext } from '../../context/DataProvider';

//components 
import LoginDialog from '../login/LoginDialog';
import BecomeSeller from '../BecomeSeller/BecomeSeller';
import Profile from './Profile';

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > *': {
        marginRight : '40px !important',
        fontsize : 16,
        alignItems : 'center'
    },
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}));
    

const Container = styled(Link)(({theme}) =>({
    display: 'flex',
    textDecoration: 'none',
    color: '#ffffff',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}));

const LoginButton = styled(Button)`
    background-color: #051922;
    color: #FFA500;
    text-transform: none;
    padding: 5px 30px;
    border-radius: 2px;
    box-shadow: none;
    height: 32px;
    justify-content: center;
`;

const SellerButton = styled(Button)`
    background-color: #051922;
    color: #fff;
    text-transform: none;
    padding: 0 50px 0 0; 
    border-radius: 2px;
    box-shadow: none;
    font-weight: 0;
    height: 32px;
    justify-content: center;
    min-width: 150px; 
    white-space: nowrap;

`;

const CustomButtons = () => {

    const [open, setOpen] = useState(false);

    const {account,setAccount} = useContext(DataContext);

    const {cartItems} = useSelector(state => state.cart);
    
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
            <Container to="/cart">
                <Badge badgeContent={cartItems?.length} color="primary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{color: '#ffffff', marginLeft: 10}}> Cart</Typography>

            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
            <BecomeSeller open={open2} setOpen={setOpen2}/>
        </Wrapper>
    )
}

export default CustomButtons;