import { CircularProgress, Container } from "@mui/material";
import { useEffect, useState } from "react";

import { Box } from "@mui/system";

// import { fetchDataAbout } from '../axios/index.js';

export const About = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/abouts/halil");
      const result = await response.json();
      console.log("getData: ", result);
      setData(result);
    } catch (error) {
      console.log("error getting abouts data: ", error);
    }
  };

  useEffect(() => {
    // const getData = async () => {
    //   const { data } = await fetchDataAbout();
    //   setData(data)
    // }

    getData();
  }, []);

  return (
    <Box id="about">
      <Container maxWidth="lm">
        {!data.length ? (
          <CircularProgress />
        ) : (
          data?.map((item, index) => {
            return (
              <div key={index}>
                <h1>{item.title}</h1>
                <p style={{ textAlign: "justify", letterSpacing: "3px" }}>
                  {item.description_1}
                </p>
                <p style={{ textAlign: "left", letterSpacing: "3px" }}>
                  {item.contact_1}
                </p>
              </div>
            );
          })
        )}
      </Container>
    </Box>
  );
};
