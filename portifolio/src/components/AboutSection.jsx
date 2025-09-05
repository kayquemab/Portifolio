"use client";

import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function AboutSection() {
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
          sx={{
            color: "#1976d2",
            fontWeight: 700,
            fontFamily: "Montserrat",
            mb: 2,
          }}
        >
          About Me
        </Typography>
        <Typography sx={{ color: "#444", maxWidth: 600, fontFamily: "Montserrat" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </Typography>
      </motion.div>
    </Box>
  );
}
