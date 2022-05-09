import { Container } from '@mui/material';
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'

export const About = () => {
  const [texts, setTexts] = useState();

  // useEffect(() => {
  //   fetchItems();
  // }, []);

  // const fetchItems = async () => {
  //   const data = await fetch("http://localhost:5000/about");
  //   const objects = await data.json();
  //   console.log('items: ', objects);
  // setItems(objects);
  // };
  useEffect(() => {
      fetch("http://localhost:5000/about")
        .then(res => res.json())
        .then(resJson => setTexts(resJson))
      console.log('items: ', texts);
 }, []);
  


  return (
    <Box id="about">
      <Container maxWidth="lm">
        {texts && texts.map((item, index) => {
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