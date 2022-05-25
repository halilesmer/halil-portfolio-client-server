import axios from "axios"
import {
  Box,
  Card,
  CardContent,
  Grid,
  Container,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";

export const Contact = () => {


  const [firstN, setFirstN] = useState("")
const [lastN, setLastN] = useState('')
const [phoneN, setPhoneN] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [subjectText, setSubjectText] = useState('')
console.log("subjectText: ", subjectText);

  const handleSend = async (e) => {
    try {
      await axios.post("http://localhost:4000/send_mail", {
        firstN, lastN, phoneN, email, subjectText, message
      })
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <Box id="contact">
      <Container>

        <Typography gutterBottom variant="h3" align="center">
          Contact Form
        </Typography>


        <Card style={{ maxWidth: 650, minWidth: 250, background: '#fbf2d9', margin: '0 auto', padding: '20px 5px' }}>
          <CardContent>
            <Typography gutterBottom variant="h5">Contact me</Typography>
            <Typography gutterBottom variant="body2" color='GrayText' component={'p'}>Fill up the form and I will get back to you within 24 hours</Typography>

            <form onSubmit={handleSend}>

              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField label="First Name" placeholder="Enter first name" variant="outlined" fullWidth required  value={firstN}  onChange={(e) => setFirstN(e.target.value)} />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label="Last Name" placeholder="Enter last name" variant="outlined" fullWidth required value={lastN}  onChange={(e) => setLastN(e.target.value)}/>
                </Grid>
                <Grid xs={12} item>
                  <TextField type="email" label="Email" placeholder="Enter your email" variant="outlined" fullWidth required value={email}  onChange={(e) => setEmail(e.target.value)}/>
                </Grid>
                <Grid xs={12} item>
                  <TextField type="number" label="Phone" placeholder="Enter your phone number" variant="outlined" fullWidth required value={phoneN}  onChange={(e) => setPhoneN(e.target.value)}/>
                </Grid>
                <Grid xs={12} item>
                  <TextField label="subject"  placeholder="Subject " variant="outlined" fullWidth required value={subjectText}  onChange={(e) => setSubjectText(e.target.value)}/>
                </Grid>
                <Grid xs={12} item>
                  <TextField label="Message" multiline rows={4} placeholder="Type your phone message" variant="outlined" fullWidth required value={message}  onChange={(e) => setMessage(e.target.value)}/>
                </Grid>
                <Grid xs={12} item>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>
              </Grid>

            </form>

          </CardContent>

        </Card>
      </Container>
    </Box>

  )

};
