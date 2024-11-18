import React, { useState, useContext } from 'react';
import { Box, Typography, Button, styled, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { DataContext } from '../../../context/DataProvider';
import { useNavigate } from 'react-router-dom';

// components 
import LoginDialog from '../../login/LoginDialog';
import Profile from './Profile';

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > *': {
        marginRight: '40px !important',
        fontSize: 16,
        alignItems: 'center',
    },
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
}));

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: '#ffffff',
    marginRight: 0,
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
}));

const LoginButton = styled(Button)`
    background-color: #051922;
    color: #FFA500;
    text-transform: none;
    padding: 5px 7px;
    border-radius: 2px;
    box-shadow: none;
    height: 32px;
    justify-content: center;
`;

const SellerButton = styled(Button)`
    background-color: #051922;
    color: #fff;
    text-transform: none;
    padding: 5px 7px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 0;
    height: 32px;
    justify-content: center;
    white-space: nowrap;
`;

const MoreButton = styled(Button)`
    background-color: #051922;
    color: #FFA500;
    text-transform: none;
    padding: 5px 7px;
    border-radius: 2px;
    box-shadow: none;
    height: 32px;
    justify-content: center;
    font-size: 16px;
`;

const CustomButtons = () => {
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);
    const { cartItems } = useSelector(state => state.cart);
    const navigate = useNavigate();

    const openDialog = () => {
        setOpen(true);
    };

    const sellerpage = () => {
        navigate('./sellerpage');
    };

    const handleCartClick = () => {
        if (account) {
            navigate('/cart');
        } else {
            openDialog();
        }
    };

    return (
        <Wrapper>
            {account ? (
                <Profile account={account} setAccount={setAccount} />
            ) : (
                <LoginButton variant="contained" onClick={openDialog} style={{ fontSize: 16 }}>
                    Login
                </LoginButton>
            )}
            <SellerButton variant="contained" onClick={sellerpage} style={{ fontSize: 16 }}>
                Become a Seller
            </SellerButton>
            <MoreButton variant="contained" style={{ fontSize: 16 }}>
                More
            </MoreButton>
            <Container onClick={handleCartClick}>
                <Badge badgeContent={cartItems?.length} color="primary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ color: '#ffffff', marginLeft: 10, fontSize: 16 }}>
                    Cart
                </Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    );
};

export default CustomButtons;
