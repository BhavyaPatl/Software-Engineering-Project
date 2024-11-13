import { useEffect } from 'react';
//Component for Home page
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
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
                <Slide products={products}/>
            </Component>
        </>

    
    )
};

export default Home;