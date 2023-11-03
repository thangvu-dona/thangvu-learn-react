import CodeIcon from "@mui/icons-material/Code";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon />

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              "& > a": { color: "#FFF", textDecoration: "none" },
            }}
          >
            <Link to="/">EZ SHOP</Link>
          </Typography>

          <NavLink to="/todos">
            <Button color="inherit" sx={{ color: "#FFF" }}>
              Todos
            </Button>
          </NavLink>

          <NavLink to="/albums">
            <Button color="inherit" sx={{ color: "#FFF" }}>
              Albums
            </Button>
          </NavLink>

          <Button color="inherit" sx={{ color: "#FFF" }}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
