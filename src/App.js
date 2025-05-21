import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Testing from './Testing';
import Sidebar from './Component/SideBar';
import { Box } from '@mui/material';
import NavBar from './Component/navbar/NavBar.jsx';
import SideBar from './Component/sidebar/SideBar.jsx';
import SideNavbar from './Component/sidebar/SideNavBar.jsx';


function App() {
  return (
    <div className="App">
  <NavBar/>
  <Box display="flex">
        <SideNavbar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <SideBar />
        </Box>
      </Box>
      </div>
  );
}

export default App;
