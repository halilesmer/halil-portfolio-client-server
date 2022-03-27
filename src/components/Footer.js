import {
  Box,
  Button,
} from "@mui/material";
import * as React from "react";
import { NavLink } from "react-router-dom";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import Link from "@mui/material/Link";



export default function Footer() {


  return (
    <>
      <footer>
        <Box
          sx={{
            width: "fit-content",
            margin: "0 auto",
            lineHeight: "6vh",
            height: "5vh",
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
          <span>|</span>
          <Link href="mailto:halilesmer3655@gmail.com" underline="none">
           
            <MailOutlinedIcon fontSize="small" />
          </Link>
        </Box>
      </footer>

      {/* <Container id='footer' fixed component={"footer"}>
        <Box sx={{  width: "100px", margin: '0 auto' }}>
          <NavLink
            end
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Impressum
          </NavLink>
        </Box>
      </Container> */}
    </>
  );
}
