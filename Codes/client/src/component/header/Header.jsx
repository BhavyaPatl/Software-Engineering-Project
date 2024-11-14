import {AppBar,Box, Toolbar , Typography, styled} from '@mui/material';
import Search from './Search';
import img1 from './logo.jpg'
import CustomButton from './CustomButtons';
import {Link} from 'react-router-dom';

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


//css camelCase in css
const PlusImage = styled('img')({
    width: 10,
    marginLeft: 4,
    height: 10
});

const CustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 auto;
`;
const logo ='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const sublogo='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
const Header = () => {
    return (
    <StyleHeader>
        <Toolbar style={{minHeight:55}}>
        <Component to='/'>
            <img src={img1} alt="DealsDone" style={{marginRight:15,height:25,width:95}}/>
        </Component>
        <Search />
        <CustomButtonWrapper>
            <CustomButton />
        </CustomButtonWrapper>
        </Toolbar>
    </StyleHeader>
    )
}

export default Header;