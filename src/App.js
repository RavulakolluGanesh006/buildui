import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Testing from './Testing';
import Sidebar from './Component/SideBar';
import { Box } from '@mui/material';
import NavBar from './Component/navbar/NavBar.jsx';


function App() {
  return (
    <div className="App">
  <NavBar/>
    </div>
  );
}

export default App;
