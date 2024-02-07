"use client"
import React from 'react'
import Box from "@mui/material/Box";
import Header from '../_components/layout/Header';
import Sidebar from '../_components/layout/Sidebar';
import DrawerHeader from '../_components/layout/DrawerHeader';
import { styled } from '@mui/material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));


type Props = {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: Props) {

  //create state for sidenav and header
  const [open, setOpen] = React.useState(true);   //React.useState(true) = open sidenav to default

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <section>
      <Box sx={{ display: "flex" }}>
        {/* pass open to Header*/}
        <Header open={open} handleDrawerOpen={handleDrawerOpen} />
        <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {children}
        </Box>
      </Box>
    </section>
  )
}