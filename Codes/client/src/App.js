
import Header from './component/header/Header';
import Home from './component/home/Home';

import DataProvider from './context/DataProvider';

import {box} from '@mui/material';

function App() {
  return (
    <DataProvider>
      <Header />
      <box style={{marginTop:54}}>
        <Home />
      </box>
    </DataProvider>
  );
}

export default App;
