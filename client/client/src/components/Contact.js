
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
import React, { useRef, useState } from "react";
import TransitionAlerts from './TransitionAlerts.js';
import emailjs from 'emailjs-com';

export const Contact = () => {

  const [open, setOpen] = useState(false);

  const [input, setInput] = useState({
    firstN: '',
    lastN: '',
    phoneN: '',
    email: '',
    subjectText: '',
    message: '',
  })

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('strato_id', 'template_mdwx4ej', form.current, 'jTw-Mb0to0HvePuVU')
      .then((result) => {
        console.log(result.text);
        setOpen(true);
        /* reset form inputs */
        setInput({
          firstN: '',
          lastN: '',
          phoneN: '',
          email: '',
          subjectText: '',
          message: '',
        });
        /* timeout of TransitionAlerts */
        setTimeout(() => {
          setOpen(false)
        }, 3000);
      }, (error) => {
        console.log(error.text);
      });

  };



  return (
    <Box id="contact">
      <Container>

        <Typography gutterBottom variant="h1">
          Contact Form
        </Typography>

        <TransitionAlerts open={open} />

        <Card style={{ maxWidth: 650, minWidth: 250, background: '#ececec', margin: '0 auto', padding: '20px 5px' }}>
          <CardContent>
            <Typography gutterBottom variant="h5">Contact me</Typography>
            <Typography gutterBottom variant="body2" color='GrayText' component={'p'}>Fill up the form and I will get back to you within 24 hours</Typography>

            <form ref={form} onSubmit={sendEmail}>

              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField name="from_name" label="First Name" placeholder="Enter first name" variant="outlined" fullWidth required value={input.firstN} onChange={(e) => setInput({ ...input, firstN: e.target.value })} />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField name="lastN" label="Last Name" placeholder="Enter last name" variant="outlined" fullWidth required value={input.lastN} onChange={(e) => setInput({ ...input, lastN: e.target.value })} />
                </Grid>
                <Grid xs={12} item>
                  <TextField type="email" label="Email" placeholder="Enter your email" variant="outlined" fullWidth required value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} />
                </Grid>
                <Grid xs={12} item>
                  <TextField name="phone" type="number" label="Phone" placeholder="Enter your phone number" variant="outlined" fullWidth required value={input.phoneN} onChange={(e) => setInput({ ...input, phoneN: e.target.value })} />
                </Grid>
                <Grid xs={12} item>
                  <TextField name="subject" label="subject" placeholder="Subject " variant="outlined" fullWidth required value={input.subjectText} onChange={(e) => setInput({ ...input, subjectText: e.target.value })} />
                </Grid>
                <Grid xs={12} item>
                  <TextField name='message' label="Message" multiline rows={4} placeholder="Type your phone message" variant="outlined" fullWidth required value={input.message} onChange={(e) => setInput({ ...input, message: e.target.value })} />
                </Grid>
                <Grid xs={12} item>
                  <Button style={{ background: '#373737' }} type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>
              </Grid>

            </form>

          </CardContent>

        </Card>
      </Container>
    </Box>

  )

};
/* const sendMessage = async (e) => {
    e.preventDefault();
    console.log('message sendet');
    try {
      await axios.post("http://localhost:4000/send_mail", {
        firstN, lastN, phoneN, email, subjectText, message
      })
      
      e.target.reset();
    } catch (error) {
      console.error(error)
    }
    snackbar.show('Ohaaaaaaaaaaaaaaaaaaai!');
    e.target.reset();
  } */