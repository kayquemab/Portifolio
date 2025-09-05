"use client";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import { FaHtml5, FaCss3Alt, FaJs, FaPencilRuler } from 'react-icons/fa';

const skills = [
  { label: 'HTML5', value: 95, icon: <FaHtml5 size={24} color="#1976d2" /> },
  { label: 'CSS3', value: 85, icon: <FaCss3Alt size={24} color="#1976d2" /> },
  { label: 'JAVASCRIPT', value: 65, icon: <FaJs size={24} color="#1976d2" /> },
  { label: 'UX/UI', value: 85, icon: <FaPencilRuler size={24} color="#1976d2" /> },
];

export default function SkillsSection() {
  return (
    <Box
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
      {/* Skills Info */}
      <Box sx={{ maxWidth: 420 }}>
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
          Skills
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
          Profesional Skills
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#444',
            fontSize: '1rem',
            mb: 3,
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.
        </Typography>
        <Stack spacing={3}>
          {skills.map(skill => (
            <Box key={skill.label} sx={{ bgcolor: '#fff', p: 2, borderRadius: 2, boxShadow: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {skill.icon}
                  <Typography sx={{ fontWeight: 600, fontFamily: 'Montserrat, sans-serif' }}>
                    {skill.label}
                  </Typography>
                </Box>
                <Typography sx={{ fontWeight: 600, fontFamily: 'Montserrat, sans-serif' }}>
                  {skill.value}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={skill.value}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  bgcolor: '#e3eafc',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: '#1976d2',
                  },
                }}
              />
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Image */}
      <Box
        component="img"
        src="/images/skills.jpg"
        alt="Skills"
        sx={{
          width: { xs: 220, md: 340 },
          height: { xs: 180, md: 220 },
          objectFit: 'cover',
          borderRadius: 3,
          boxShadow: 2,
        }}
      />
    </Box>
  );
}