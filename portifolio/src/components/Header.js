"use client";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const menuOptions = [
  { label: 'Home', ref: 'homeRef' },
  { label: 'About', ref: 'aboutRef' },
  { label: 'Skills', ref: 'skillsRef' },
  { label: 'Work', ref: 'workRef' },
  { label: 'Contact', ref: 'contactRef' },
];

const ElegantButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  color: '#222',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  fontSize: '1rem',
  background: 'none',
  boxShadow: 'none',
  textTransform: 'none',
  marginLeft: theme.spacing(2),
  '&:after': {
    content: '""',
    display: 'block',
    width: 0,
    height: 2,
    background: theme.palette.primary.main,
    transition: 'width 0.3s',
    position: 'absolute',
    left: 0,
    bottom: -2,
  },
  '&:hover:after': {
    width: '100%',
  },
  '&:hover': {
    background: 'none',
  },
}));

export default function Header({ sectionRefs }) {
  const handleScroll = refName => {
    const ref = sectionRefs?.[refName];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: '#fff', borderBottom: '1px solid #e0e0e0', height: 56 }}>
      <Toolbar sx={{ minHeight: 56, display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: '#1976d2',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '1.2rem',
            letterSpacing: 1,
          }}
        >
          Marlon
        </Typography>
        <Box>
          {menuOptions.map(option => (
            <ElegantButton key={option.label} onClick={() => handleScroll(option.ref)}>
              {option.label}
            </ElegantButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}