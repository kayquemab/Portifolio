"use client";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactSection() {
  return (
    <Box
      sx={{
        minHeight: '60vh',
        pt: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <Box
        component="form"
        sx={{
          width: { xs: '90%', sm: 400 },
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            bgcolor: '#fff',
            borderRadius: 2,
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            bgcolor: '#fff',
            borderRadius: 2,
          }}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={5}
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            bgcolor: '#fff',
            borderRadius: 2,
          }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: '#1976d2',
            color: '#fff',
            borderRadius: 2,
            textTransform: 'none',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 500,
            fontSize: '1rem',
            boxShadow: 'none',
            mt: 2,
            '&:hover': {
              bgcolor: '#115293',
            },
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}