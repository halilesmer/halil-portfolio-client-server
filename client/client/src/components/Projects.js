import {
  Box,
  Container,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link,
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import * as React from "react";
import { DATA } from './data.js';


/* import imgDemkupu from '../assets/screenshots/dem_kupu.webp' */

export const Projects = () => {

  const styleCard = {
    width: '500',
    maxWidth: '345',
    maxHeight: '650',
    boxShadow: 5,
    p: 1,
    margin: 0,
  };

  return (
    <Box id="projects">
      <Container maxWidth="lm">
        <h1>
          Projects
        </h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ minHeight: "100vh" }}
        >
          {DATA && DATA.english.projects.map((data, index) => (
            <Grid item xs={12} sm={4} md={6} key={index}
              style={{ height: "fit-content" }}>
              <Card sx={styleCard}>
                <Link
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={data?.img}
                    alt="green iguana"
                    style={{ height: '300px' }}
                  />
                </Link>

                <CardContent>
                  <Typography className="cardHeader" gutterBottom variant="h5" component="div">
                    {data?.title}
                  </Typography>
                  <Typography variant="body2" component='p' color="text.secondary">
                    {data?.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    href={data?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                  >
                    Show
                  </Button>
                  <Button
                    href={data?.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                  >
                    
<GitHubIcon/>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

          ))}
        </Grid>
      </Container>
    </Box>
  );
};
