// components/Sidebar.jsx
import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Home from '../sideBarInner/Home';
import Analytics from '../sideBarInner/Analytics';
import Assignment from '../sideBarInner/Assignment';
import Search from '../sideBarInner/Search';
import People from '../sideBarInner/People';
import Groups from '../sideBarInner/Groups';
import PostAdd from '../sideBarInner/PostAdd';
import MenuBook from '../sideBarInner/MenuBook';
import Work from '../sideBarInner/Work';
import Warning from '../sideBarInner/Warning';
import BusinessCenter from '../sideBarInner/BusinessCenter';
import Poll from '../sideBarInner/Poll';
import BarChart from '../sideBarInner/BarChart';
import TrackChanges from '../sideBarInner/TrackChanges';
import School from '../sideBarInner/School';
import AccountCircle from '../sideBarInner/AccountCircle';
import Help from '../sideBarInner/Help';
import Logout from '../sideBarInner/Logout';




const menuItems = [
  { label: 'Home', icon: <Home /> },
  { label: 'Analytics', icon: <Analytics /> },
  { label: 'Audit', icon: <Assignment /> },
  { label: 'Planned Inspection', icon: <Search /> },
  { label: 'Safety Interaction', icon: <People /> },
  { label: 'Safety Council', icon: <Groups /> },
  { label: 'My Posts', icon: <PostAdd /> },
  { label: 'Micro Learning', icon: <MenuBook /> },
  { label: 'Work Permit', icon: <Work /> },
  { label: 'Risk Management', icon: <Warning />, active: true },
  { label: 'Contractor Management', icon: <BusinessCenter /> },
  { label: 'Survey', icon: <Poll /> },
  { label: 'Reports', icon: <BarChart /> },
  { label: 'Action Tracker', icon: <TrackChanges /> },
  { label: 'Training', icon: <School  /> },
  { label: 'Account', icon: <AccountCircle /> },
  { label: 'Help', icon: <Help /> },
];

export default function Sidebar() {
  return (
    <Box sx={{
      width: 250,
      height: '100vh',
      bgcolor: '#f9f9f9',
      borderRight: '1px solid #ddd',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              button
              sx={{
                color: item.active ? '#8e24aa' : '#444',
                fontWeight: item.active ? 'bold' : 'normal',
              }}
            >
              <ListItemIcon sx={{ color: item.active ? '#8e24aa' : '#888' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <ListItem button sx={{ color: '#d32f2f' }}>
          <ListItemIcon sx={{ color: '#d32f2f' }}>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </Box>
    </Box>
  );
}
