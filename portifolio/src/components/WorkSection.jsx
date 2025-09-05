"use client";

import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function WorkSection() {
  return (
    <Box sx={{ minHeight: "100vh", px: 2, py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#1976d2", fontWeight: 700, fontFamily: "Montserrat", mb: 4 }}
        >
          Work
        </Typography>
        <Grid container spacing={3}>
          {[...Array(6)].map((_, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                sx={{
                  height: 160,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 3,
                  boxShadow: 2,
                  cursor: "pointer",
                }}
              >
                Project {i + 1}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}
