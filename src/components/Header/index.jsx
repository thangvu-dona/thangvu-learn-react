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
import Register from "features/Auth/components/Register";
import { IconButton } from "@mui/material";
import { AccountCircle, Close } from "@mui/icons-material";
import Login from "features/Auth/components/Login";
import { useSelector } from "react-redux";

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

export default function Header() {
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;

  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState(MODE.LOGIN); // state for switching mode

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

          {!isLoggedIn && (
            <Button
              color="inherit"
              sx={{ color: "#FFF" }}
              onClick={handleClickOpen}
            >
              Login
            </Button>
          )}

          {isLoggedIn && (
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Dialog open={open} onClose={handleClose}>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />

              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account. Login here!
                </Button>
              </Box>
            </>
          )}

          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />

              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Don't have account. Register here!
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
