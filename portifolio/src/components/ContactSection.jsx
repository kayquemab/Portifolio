"use client";

import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ContactSection() {
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
          Contact
        </Typography>
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <TextField label="Name" variant="outlined" fullWidth />
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#1976d2",
              textTransform: "none",
              borderRadius: 2,
              "&:hover": { bgcolor: "#115293" },
            }}
          >
            Send
          </Button>
        </Stack>
      </motion.div>
    </Box>
  );
}
