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
import * as React from "react";
import daten from "./daten.json";

export const Projects = () => {
  const styleCard = {
    maxWidth: '345',
    maxHeight: '650px'

  };
  // const styleCardHeader = {
  //   fontSize: 'calc(16px + 5 * ((100vw - 320px) / 680))'
    
  // };

  return (
    <Box id="about">
      <Container maxWidth="lm">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "700",
            paddingBottom: "30px",
          }}
        >
          Projects
        </h1>
        <Grid
          // alignItems="center"
          // justify="center"
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ minHeight: "100vh" }}
        >
          {daten.map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card sx={styleCard}>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt="green iguana"
                  />
                </Link>

                <CardContent>
                  <Typography className="cardHeader"  gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                  >
                    Show
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

/*     <Box id="about">
      <Container maxWidth="lm">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "700",
            paddingBottom: "30px",
          }}
        >
          Projects
        </h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {array.map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="http://dummyimage.com/100x100.png/ff4444/ffffff"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box> */
