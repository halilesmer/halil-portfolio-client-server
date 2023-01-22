import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import { nodeEnv } from "../utils/config.js";
import useFetch from "./UseFetch.js";

export const Projects = () => {
  const [data, setData] = useState([]);
  const env = nodeEnv.serverURL;
  const { get } = useFetch(`${env}/projects`);

  const getData = async () => {
    try {
      const result = await get(`/halil`);
      // sort data by date
      setData(
        result.sort((a, b) => new Date(b.updatedDt) - new Date(a.updatedDt))
      );
    } catch (error) {
      console.log("error getting abouts data: ", error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const styleCard = {
    width: "500",
    maxWidth: "345",
    maxHeight: "650",
    boxShadow: 5,
    p: 1,
    margin: 0,
  };

  console.log(
    "data: ",
    data.length &&
      data.sort((a, b) => new Date(b.updatedDt) - new Date(a.updatedDt))
  );
  return (
    <Box id="projects">
      <Container maxWidth="lm" sx={{ textAlign: "center" }}>
        {!data.length && <CircularProgress />}
        <h1>Projects</h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ minHeight: "100vh", justifyContent: "center" }}
        >
          {data.length &&
            data?.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={6}
                  key={index}
                  style={{
                    height: "fit-content",
                    textAlign: "initial",
                    margin: "auto 5px",
                    paddingLeft: "unset",
                    maxWidth: "325px",
                  }}
                >
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
                        style={{
                          height: "300px",
                          margin: "auto",
                          border: "dotted 0.5px #8d9294",
                          objectFit: "contain",
                        }}
                      />
                    </Link>

                    <CardContent>
                      <Typography
                        className="cardHeader"
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {item?.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color="text.secondary"
                      >
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
              );
            })}
        </Grid>
      </Container>
    </Box>
  );
};
