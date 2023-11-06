import CodeIcon from "@mui/icons-material/Code";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import Register from "../../features/Auth/components/Register";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    // console.log("reason: ", reason); // reason is 'backdropClick' or 'escapeKeyDown'
    if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
      // Set 'open' to false, however you would do that with your particular code.
      setOpen(false);
    }
  };

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

          <Button
            color="inherit"
            sx={{ color: "#FFF" }}
            onClick={handleClickOpen}
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Register closeDialog={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
