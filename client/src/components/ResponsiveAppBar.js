import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import React, {useState} from "react";

import Drawer from "./Drawer.js";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import avatar from "../assets/halil-esmer-profil-picture.webp";

const ResponsiveAppBar = () => {
  const [state, setState] = useState(false);

  const handleOpenNavMenu = (event) => {
    setState(!state);
  };

  return (
    <AppBar id="appBar" position="static">
      <Container className="appbar-con" maxWidth="xl">
        <Toolbar className="appbar-toolbar" disableGutters>
          <Box className="appbar-icon-con" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
