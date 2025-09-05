"use client";

import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";

const skills = [
  { label: "HTML", value: 95 },
  { label: "CSS", value: 85 },
  { label: "JavaScript", value: 70 },
  { label: "UI/UX", value: 80 },
];

export default function SkillsSection() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", px: 2 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#1976d2", fontWeight: 700, fontFamily: "Montserrat", mb: 3 }}
        >
          Skills
        </Typography>
        <Stack spacing={3} sx={{ maxWidth: 500 }}>
          {skills.map((skill) => (
            <Box key={skill.label}>
              <Typography sx={{ mb: 1, fontWeight: 500, fontFamily: "Montserrat" }}>
                {skill.label} - {skill.value}%
              </Typography>
              <LinearProgress
                variant="determinate"
                value={skill.value}
                sx={{
                  height: 8,
                  borderRadius: 5,
                  "& .MuiLinearProgress-bar": { bgcolor: "#1976d2" },
                }}
              />
            </Box>
          ))}
        </Stack>
      </motion.div>
    </Box>
  );
}
