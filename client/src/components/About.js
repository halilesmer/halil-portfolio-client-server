import { useState, useEffect } from "react";
import { Container } from '@mui/material';
import { Box } from '@mui/system'


// Components
//import Card from "./components/Card";


export const About = ({match}) => {
  //const pageNumber = match.params.pageNumber || 1;

  const [posts, setPosts] = useState([]);
 

  //const [page, setPage] = useState(pageNumber);
  //const [pages, setPages] = useState(1);

  useEffect(() => {
    const fecthPosts = async () => {

      try {
        const res = await fetch(`/api/v1/posts`);

        //const res = await fetch("http://localhost:5000/");

        const { data} = await res.json();
        console.log('data: ', data);

       // setPages(totalPages);
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
            </div>
          )
        })}

      </Container>
    </Box>
  );


};


