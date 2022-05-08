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
    console.log('items: ', items);
    setItems(items);
 
  };


  return (
    <Box id="about">
      <Container maxWidth="lm">
        {items && items.map((item, index) => {
          return (
            <div key={index}>
              <h4>{item.aboutHeading}</h4>
              <p>{item.aboutText}</p>
             </div>
          )
})}
       
      </Container>
    </Box>
  );
}