import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import avatar from "../assets/halil-esmer-profil-picture.webp";
import { NavLink } from "react-router-dom";
import Drawer from "./Drawer";

const ResponsiveAppBar = () => {
  const [state, setState] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setState(!state);
  };

  return (
    <AppBar id="appBar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <NavLink
            end
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <Button sx={{ mr: 2 }} color="inherit" variant="text">
              Halil Esmer
            </Button>
          </NavLink>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <NavLink
                end
                to="/"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="halil-esmer-profil-picture" src={avatar} />
                </IconButton>
              </NavLink>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      {/* ------------- Drawer ---------------- */}
      <Drawer state={state} setState={setState} />
    </AppBar>
  );
};
export default ResponsiveAppBar;
