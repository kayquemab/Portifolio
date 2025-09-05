"use client";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaBehance } from 'react-icons/fa';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        bgcolor: '#fafbfc',
        px: 4,
        py: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 4,
      }}
    >
      {/* Text Section */}
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            color: '#222',
            fontSize: { xs: '2.2rem', md: '3.5rem' },
            lineHeight: 1.1,
          }}
        >
          Hi,
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            color: '#222',
            fontSize: { xs: '2.2rem', md: '3.5rem' },
            lineHeight: 1.1,
          }}
        >
          Im <Box component="span" sx={{ color: '#1976d2' }}>Marlon</Box>
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            color: '#222',
            fontSize: { xs: '2.2rem', md: '3.5rem' },
            lineHeight: 1.1,
            mb: 3,
          }}
        >
          Web Designer
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#1976d2',
            color: '#fff',
            borderRadius: 2,
            textTransform: 'none',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 500,
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            boxShadow: 'none',
            mb: 4,
            '&:hover': {
              bgcolor: '#115293',
            },
          }}
        >
          Contact
        </Button>
        <Stack direction="row" spacing={2}>
          <IconButton href="#" sx={{ color: '#222' }}>
            <LinkedInIcon fontSize="medium" />
          </IconButton>
          <IconButton href="#" sx={{ color: '#222' }}>
            <FaBehance size={24} />
          </IconButton>
          <IconButton href="#" sx={{ color: '#222' }}>
            <GitHubIcon fontSize="medium" />
          </IconButton>
        </Stack>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          width: { xs: 220, md: 340 },
          height: { xs: 220, md: 340 },
          bgcolor: '#1976d2',
          borderRadius: '50% 40% 50% 50% / 50% 60% 40% 50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src="/images/profile.jpg"
          alt="Profile"
          sx={{
            width: '80%',
            height: '80%',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      </Box>
    </Box>
  );
}