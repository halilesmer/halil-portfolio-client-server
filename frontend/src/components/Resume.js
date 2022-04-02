import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from 'react'

export const Resume = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);


  const fetchItems = async () => {
    const data = await fetch("/about");
    const items = await data.json();
    setItems(items);
   // console.log('items: ', items);
  };
  return (
    <Box id="resume">
      <Container maxWidth="lm">
        
        {items && items.map((item, index) => {
          return (
            <div key={index}>  <p>
              {items && items.map(item => item.resumeHeading)}
            </p>
              <p>
                {items && items.map(item => item.resumeText)}
              </p></div>
          )
        })}
      </Container>
    </Box>
  );
};
