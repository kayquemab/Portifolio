"use client";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function WorkSection() {
  return (
    <Box
      sx={{
        minHeight: '60vh',
        pt: 8,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: '#1976d2',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700,
          mb: 4,
          borderBottom: '3px solid #1976d2',
          display: 'inline-block',
          pb: 0.5,
        }}
      >
        Work
      </Typography>
      <Grid container spacing={4}>
        {[...Array(6)].map((_, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Paper
              elevation={2}
              sx={{
                height: 180,
                borderRadius: 3,
                bgcolor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'box-shadow 0.2s',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: '0 4px 16px rgba(25, 118, 210, 0.12)',
                },
              }}
            >
              <Typography
                sx={{
                  color: '#bbb',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                }}
              >
                Card {idx + 1}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}