import {AppBar,Box, IconButton, Toolbar, Drawer, List, Typography, styled} from '@mui/material';
import img1 from './logo.jpg'
import CustomButtons from './Custombuttons';
import {Link} from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { useState } from 'react';

const StyleHeader = styled(AppBar)`
    background: #051922;
    height: 55px;
    box-shadow: none;
`;


const Component = styled(Link)`
    margin-left: 5%;
    line-height: 0;
    text-decoration: none;
    color : inherit;
`;

const Subheading = styled(Typography)`
    font-size: 10px;
`;

const PlusImage = styled('img')({
    width: 10,
    marginLeft: 4,
    height: 10
});

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const Header = () => {
    const logo ='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const sublogo='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleOpen = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const list = () => (
        <Box style={{ width: 200 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );

    return (
    <StyleHeader>
        <Toolbar style={{minHeight:55}}>
            <MenuButton color="inherit" onClick={handleOpen}>
                <Menu/>
            </MenuButton>

            <Drawer open={open} onClose={handleClose}>
                {list()}
            </Drawer>

            <Component to='/'>
                <img src={img1} alt="DealsDone" style={{marginRight:15,height:25,width:95}}/>
                    
            </Component>
            <CustomButtonWrapper>
                <CustomButtons />
            </CustomButtonWrapper>
        </Toolbar>
    </StyleHeader>
    )
}

export default Header;