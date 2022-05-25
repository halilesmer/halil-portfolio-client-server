import { useState, useEffect } from "react";
import { Container } from '@mui/material';
import { Box } from '@mui/system'

export const About = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fecthPosts = async () => {
      try {
        const res = await fetch(`/api/v1/posts`);
        const { data } = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fecthPosts();
  }, []);


  return (
    <Box id="about">
      <Container maxWidth="lm">
        {posts && posts.map((post, index) => {
          return (
            <div key={index}>
              <h4>{post.title}</h4>
              <p>{post.text1}</p>
              <p>{post.contact1}</p>
            </div>
          )
        })}

      </Container>
    </Box>
  );


};


