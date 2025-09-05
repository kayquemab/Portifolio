"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const menuOptions = [
  { label: "Home", ref: "homeRef" },
  { label: "About", ref: "aboutRef" },
  { label: "Skills", ref: "skillsRef" },
  { label: "Work", ref: "workRef" },
  { label: "Contact", ref: "contactRef" },
];

export default function Header({ sectionRefs }) {
  const handleScroll = (refName) => {
    const ref = sectionRefs?.[refName];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ bgcolor: "#fff", borderBottom: "1px solid #e0e0e0", height: 56 }}
    >
      <Toolbar
        sx={{ minHeight: 56, display: "flex", justifyContent: "space-between" }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#1976d2",
            fontWeight: 700,
            fontFamily: "Montserrat",
          }}
        >
          Marlon
        </Typography>
        <Box>
          {menuOptions.map((option) => (
            <Button
              key={option.label}
              onClick={() => handleScroll(option.ref)}
              sx={{
                color: "#222",
                textTransform: "none",
                fontFamily: "Montserrat",
                fontWeight: 500,
                mx: 1,
                "&:hover": { color: "#1976d2" },
              }}
            >
              {option.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
