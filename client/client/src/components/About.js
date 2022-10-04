
import { Container } from '@mui/material';
import { Box } from '@mui/system'
import {DATA} from './data.js';

export const About = () => {

  return (
    <Box id="about">
      <Container maxWidth="lm">
        {DATA && DATA.english.about.map((post, index) => {
          return (
            <div key={index}>
              <h1>{post.title}</h1>
              <p>{post.description_1}</p>
              <p>{post.contact_1}</p>
            </div>
          )
        })}

      </Container>
    </Box>
  );


};


