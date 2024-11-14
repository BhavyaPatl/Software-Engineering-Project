import { useEffect } from 'react';
//Component for Home page
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

import {styled,Box} from '@mui/material';
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch,useSelector } from 'react-redux';


const Component = styled(Box)
`
    padding: 20px 10px;
    background: #f2f2f2;
`;


const Home = () => {

    const {products}=useSelector(state => state.getProducts);

    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true}/>
                <MidSection/>
                <Slide products={products} title="Discounts for you" timer={false}/>
                <Slide products={products} title="Suggesting Items" timer={false}/>
                <Slide products={products} title="Top Selection" timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Trending offers" timer={false}/>
                <Slide products={products} title="Season's top picks" timer={false}/>
                <Slide products={products} title="top deals on Accessories" timer={false}/>
            </Component>
        </>

    
    )
};

export default Home;