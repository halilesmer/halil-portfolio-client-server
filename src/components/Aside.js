import { Box, Container, Divider, Stack } from "@mui/material";
import * as React from "react";


export default function Aside() {
    const styleDivider = {
        background: 'white'
    }
  return (
    <>
      <aside>
        <Container fixed>
          <Box sx={{ height: "100vh" }}>
            <Stack
              mt={2}
              direction="column"
              justifyContent="center"
              alignItems="stretch"
              spacing={2}
            >
              <li>Resume</li>
              <Divider
                sx={styleDivider}
              />
              <li>Projects</li>
              <Divider sx={styleDivider}/>
              <li>About</li>
              <Divider sx={styleDivider}/>
            </Stack>
          </Box>
        </Container>
      </aside>
    </>
  );
}
