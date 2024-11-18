import Home from './component/home/Home';
import AddProduct from './component/Sellerpage/Addproduct/AddProduct'; 
import DetailView from './component/details/DetailView';
import DataProvider from './context/DataProvider';
import Cart from './component/cart/Cart';
import SellerPage from './component/Sellerpage/Sellerpage'
import ProfilePage from './component/ProfilePage/ProfilePage'
import {Box} from '@mui/material';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const token = localStorage.getItem('token');
  const islogedin = localStorage.getItem('islogedin');
  

  return (
    <DataProvider>
      <BrowserRouter>
      
      <Box style={{marginTop:54}}>
        <Routes>
          <Route path='/' element={  <Home /> }/>
          <Route path='/product/:id' element={<DetailView />} />
          <Route path='/add-product' element={<AddProduct />} /> {/* This route should load AddProduct */}
          <Route path='/sellerpage' element={<SellerPage />} />
          <Route path='/profilepage' element={<ProfilePage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
