
import Header from './component/header/Header';
import Home from './component/home/Home';
import AddProduct from './component/BecomeSeller/AddProduct'; 
import DetailView from './component/details/DetailView';
import DataProvider from './context/DataProvider';

import {Box} from '@mui/material';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header />
      <Box style={{marginTop:54}}>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/product/:id' element={<DetailView />} />
          <Route path='/add-product' element={<AddProduct />} /> {/* This route should load AddProduct */}

        </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
