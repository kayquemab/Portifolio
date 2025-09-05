"use client";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        bgcolor: '#fff',
        borderTop: '1px solid #e0e0e0',
        py: 3,
        mt: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2 }}>
        <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#222' }}>
          <FaInstagram size={24} />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" sx={{ color: '#222' }}>
          <FaLinkedin size={24} />
        </IconButton>
        <IconButton href="https://github.com" target="_blank" sx={{ color: '#222' }}>
          <FaGithub size={24} />
        </IconButton>
        <IconButton href="mailto:seuemail@exemplo.com" sx={{ color: '#222' }}>
          <FaEnvelope size={24} />
        </IconButton>
        <IconButton href="https://wa.me/5511999999999" target="_blank" sx={{ color: '#222' }}>
          <FaWhatsapp size={24} />
        </IconButton>
      </Box>
      <Typography
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          color: '#888',
          fontSize: '0.95rem',
          mt: 1,
        }}
      >
        © {new Date().getFullYear()} Marlon. All rights reserved.
      </Typography>
    </Box>
  );
}