import { Container } from '@mui/material';
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'

export const About = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    fetchItems();
  }, []);


  const fetchItems = async () => {
    const data = await fetch("/about");
    const items = await data.json();
    setItems(items);
    console.log('items: ', items);
 
  };


  return (
    <Box id="about">
      <Container maxWidth="lm">
        {items && items.map((item, index) => {
          return (
            <div key={index}>  <p>
              {items && items.map(item => item.aboutHeading)}
            </p>
              <p>
                {items && items.map(item => item.aboutText)}
              </p></div>
          )
})}
       
      </Container>
    </Box>
  );
}