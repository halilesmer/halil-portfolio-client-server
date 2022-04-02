import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Aside from "./Aside";
import { Container } from "@mui/material";

export default function Drawer({ state, setState }) {
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Container
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      id="drawerMenu"
      component={"aside"}
      fixed
    >
      <Aside />
    </Container>
  );

  return (
    <SwipeableDrawer
      anchor={"left"}
      open={state}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      {list()}
    </SwipeableDrawer>
  );
}
