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
  CircularProgress,
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

import React, { useState, useEffect } from "react";


import { fetchDataProjects } from '../axios/index.js';

export const Projects = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await fetchDataProjects();
      console.log("data: ", data);
      setData(data)
    }

    getData()
  }, [])

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
      <Container maxWidth="lm" sx={{textAlign: 'center'}}>
      
      {!data.length && <CircularProgress /> }
        <h1>
          Projects
        </h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ minHeight: "100vh" }}
        >
          {data.length &&

            data.map((item, index) => {
              return (
                <Grid item xs={12} sm={4} md={6} key={index}
                  style={{ height: "fit-content", textAlign: 'initial', margin: 'auto'}}>
                  <Card sx={styleCard}>
                    <Link
                      href={item?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={item?.img}
                        alt="green iguana"
                        style={{ height: '300px', inlineSize:'auto', margin: 'auto'}}
                      />
                    </Link>

                    <CardContent>
                      <Typography className="cardHeader" gutterBottom variant="h5" component="div">
                        {item?.title}
                      </Typography>
                      <Typography variant="body2" component='p' color="text.secondary">
                        {item?.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        href={item?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >
                        Show
                      </Button>
                      <Button
                        href={item?.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                      >

                        <GitHubIcon />
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
        </Grid>
      </Container>
    </Box>
  );
};
