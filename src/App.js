import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Testing from './Testing';
import Sidebar from './Component/SideBar';
import { Box } from '@mui/material';
function App() {
  return (
    <div className="App">
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flex: 1, bgcolor: '#fff' }}>
        <Testing />
      </Box>
    </Box>
    </div>
  );
}

export default App;
