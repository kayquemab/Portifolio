"use client";

import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        pt: 8,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: 700, color: "#222", fontFamily: "Montserrat", mb: 2 }}
        >
          Hi, I’m{" "}
          <Box component="span" sx={{ color: "#1976d2" }}>
            Marlon
          </Box>
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "#555", fontFamily: "Montserrat", mb: 3 }}
        >
          Web Designer & Frontend Developer
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#1976d2",
            borderRadius: 2,
            px: 4,
            py: 1.5,
            textTransform: "none",
            "&:hover": { bgcolor: "#115293" },
          }}
        >
          Contact Me
        </Button>
      </motion.div>
    </Box>
  );
}
