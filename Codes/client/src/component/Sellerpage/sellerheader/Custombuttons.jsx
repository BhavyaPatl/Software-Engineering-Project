import React, { useState, useContext } from 'react';
import { Box, Typography, Button, styled, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { DataContext } from '../../../context/DataProvider';

// components
import BecomeSeller from '../BecomeSeller/BecomeSeller';
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
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
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

    const { account, setAccount } = useContext(DataContext);

    const { cartItems } = useSelector(state => state.cart);

    const openDialog = () => {
        setOpen(true);
    };

    const handleSellerClick = () => {
        if (account) {
            // Navigate to the Become a Seller page
            console.log('Navigating to Become a Seller page');
        } else {
            openDialog();
        }
    };

    const handleCartClick = () => {
        if (account) {
            // Navigate to the cart page
            console.log('Navigating to Cart page');
        } else {
            openDialog();
        }
    };

    return (
        <Wrapper>
            {account ? (
                <Profile account={account} setAccount={setAccount} />
            ) : (
                <LoginButton variant="contained" onClick={openDialog}>
                    Login
                </LoginButton>
            )}

            <SellerButton variant="contained" onClick={handleSellerClick}>
                Become a Seller
            </SellerButton>

            <Container onClick={handleCartClick}>
                <Badge badgeContent={cartItems?.length} color="primary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ color: '#ffffff', marginLeft: 10 }}>Cart</Typography>
            </Container>

            <BecomeSeller open={open} setOpen={setOpen} />
        </Wrapper>
    );
};

export default CustomButtons;
