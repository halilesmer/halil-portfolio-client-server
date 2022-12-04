import { CircularProgress, Container } from "@mui/material";
import { useEffect, useState } from "react";

import { Box } from "@mui/system";
import { nodeEnv } from "../utils/config";

export const About = () => {
  const [data, setData] = useState([]);
  const env = nodeEnv.serverURL;
  console.log("env: ", env);

  const getData = async () => {
    try {
      const response = await fetch(`${env}/abouts/halil`);
      const result = await response.json();
      console.log("getData: ", result);
      setData(result);
    } catch (error) {
      console.log("error getting abouts data: ", error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <Container className="about-con">
      <Box maxWidth="lm">
        {!data.length ? (
          <CircularProgress />
        ) : (
          data?.map((item, index) => {
            return (
              <div key={index}>
                <h1 className="about-welcome-header">{item.title}</h1>
                <p className="about-text">{item.description_1}</p>
                <p
                  className="about-text"
                  // style={{ textAlign: "left", letterSpacing: "3px" }}
                >
                  {item.contact_1}
                </p>
              </div>
            );
          })
        )}
      </Box>
    </Container>
  );
};
