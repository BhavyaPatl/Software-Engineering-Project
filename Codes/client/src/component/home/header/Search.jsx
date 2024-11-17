import { InputBase, Box, styled, List , ListItem} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
    background-color: #fff;
    width: 38%;
    border-radius: 3px;
    margin-left: 10px;
    display: flex;
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`;

const SearchIconBase = styled(Box)`
    color: blue;
    padding: 5px;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;

const Search = () => {
    const [text, setText] = useState('');
    
    const {products} = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    const getText = (text) => {
        setText(text);
    };

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <SearchContainer>
            <InputSearchBase
                placeholder='Search for products, brands and more'
                onChange={(e) => getText(e.target.value)}
                value= {text}
            />
            <SearchIconBase>
                <SearchIcon />
            </SearchIconBase>

            {
                text && 
                    <ListWrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <ListItem>
                                    <Link 
                                        to={`/product/${product.id}`} 
                                        style={{ textDecoration:'none', color:'inherit'}}
                                        onClick={() => setText('')} >
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                              ))
                        }
                    </ListWrapper>
            }

        </SearchContainer>
    );
};

export default Search;
