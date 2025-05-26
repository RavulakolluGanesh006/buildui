import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Box } from '@mui/material';
import NavBar from './Component/navbar/NavBar.jsx';

import SideNavbar from './Component/sidebar/SideNavBar.jsx';
import Sidebar1 from './Component/sidebar/SideBar1.jsx';


function App() {
  return (
    <div className="App">
  <NavBar/>
  <Box display="flex">
        <SideNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Sidebar1 />
        </Box>
      </Box>
      </div>
  );
}

export default App;
