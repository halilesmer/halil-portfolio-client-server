import {
  Avatar,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import * as React from "react";
import avatar from "../assets/halil-esmer-profil-picture_sidebar.webp";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import {NavLink } from "react-router-dom";

export default function Aside() {
  const styleDivider = {
    background: "#b09898",
    marginTop: "10px",
    listStyle: "none !importent",
  };
  const styleLists = {
    margin: 0,
    paddingBottom: 0,
  };
  const styleAvatar = { width: 100, height: 100, margin: "0 auto" };

  return (
    <>
      <aside>
        <Container fixed>
          <Avatar
            alt="halil_esmer-profil-picture"
            src={avatar}
            sx={styleAvatar}
          />
          <Box sx={{ width: "100%", maxWidth: 360 }}>
            <nav aria-label="main mailbox folders">
              <List sx={styleLists}>
                <NavLink
                  end
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <ListItem disablePadding>
                    <ListItemButton sx={styleLists}>
                      <ListItemIcon>
                        <ArrowForwardIosRoundedIcon />
                      </ListItemIcon>
                      <ListItemText primary="About" />
                    </ListItemButton>
                  </ListItem>
                </NavLink>

                <Divider sx={styleDivider} />

                <NavLink
                  end
                  to="/resume"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <ListItem disablePadding>
                    <ListItemButton sx={styleLists}>
                      <ListItemIcon>
                        <ArrowForwardIosRoundedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Resume" />
                    </ListItemButton>
                  </ListItem>
                </NavLink>

                <Divider sx={styleDivider} />

                <NavLink
                  end
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <ListItem disablePadding>
                    <ListItemButton sx={styleLists}>
                      <ListItemIcon>
                        <ArrowForwardIosRoundedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Projects" />
                    </ListItemButton>
                  </ListItem>
                </NavLink>

                <Divider sx={styleDivider} />

                <NavLink
                  end
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <ListItem disablePadding>
                    <ListItemButton sx={styleLists}>
                      <ListItemIcon>
                        <ArrowForwardIosRoundedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Contact" />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
              </List>
            </nav>
            <Divider sx={styleDivider} />
          </Box>
        </Container>
      </aside>
    </>
  );
}
