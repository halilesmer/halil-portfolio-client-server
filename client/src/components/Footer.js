import { Box, Button } from "@mui/material";
import * as React from "react";
import { NavLink } from "react-router-dom";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";

export const Footer = () => {
  return (
    <>
      <footer>
        <Box
          sx={{
            width: "fit-content",
            margin: "0 auto",
            lineHeight: "6vh",
            height: "6vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink
            end
            to="/impressum"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <Button color="inherit" variant="text" className="footerButton">
              Impressum
            </Button>
          </NavLink>
          <span>&nbsp;|&nbsp;&nbsp;</span>
          <Link
            href="mailto:halil@esmer.de"
            underline="none"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MailOutlinedIcon fontSize="small" />
          </Link>

          <span> &nbsp;&nbsp;|&nbsp;&nbsp; </span>

          <Link
            href="https://github.com/halilesmer"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GitHubIcon fontSize="small" />
          </Link>
        </Box>
      </footer>
    </>
  );
}
