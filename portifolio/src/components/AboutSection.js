"use client";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect, useRef } from 'react';

export default function AboutSection() {
  const sectionRef = useRef();

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.animate(
        [
          { opacity: 0, transform: 'translateY(40px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 600, easing: 'ease-out' }
      );
    }
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        pt: 8,
      }}
    >
      <Box
        component="img"
        src="/images/profile.jpg"
        alt="Profile"
        sx={{
          width: { xs: 180, md: 260 },
          height: { xs: 220, md: 300 },
          objectFit: 'cover',
          borderRadius: 3,
          boxShadow: 2,
        }}
      />
      <Box sx={{ maxWidth: 400 }}>
        <Typography
          variant="h4"
          sx={{
            color: '#1976d2',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            mb: 2,
            borderBottom: '3px solid #1976d2',
            display: 'inline-block',
            pb: 0.5,
          }}
        >
          About
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            color: '#222',
            mb: 1,
          }}
        >
          Im Marlon
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#444',
            fontSize: '1rem',
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.
        </Typography>
      </Box>
    </Box>
  );
}