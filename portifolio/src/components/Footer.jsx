"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        height: 56, // mesma altura do header
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px solid #e0e0e0",
        mt: 6,
      }}
    >
      <Typography sx={{ color: "#666", fontFamily: "Montserrat" }}>
        © {new Date().getFullYear()} Marlon. All rights reserved.
      </Typography>
    </Box>
  );
}
