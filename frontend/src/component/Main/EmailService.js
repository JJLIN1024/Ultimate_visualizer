import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

function EmailService(props) {

  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className="Email-service-container" 
          component="section" 
          style={{
            margin:"2rem 0"
          }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Card className="card"
            style={{
              height: "100%",
            }}>
            <CardContent>
              <Typography variant="h2" component="h2" gutterBottom>
                Receive Email
              </Typography>
              <Typography variant="h3" component="h4" gutterBottom>
                Subscribe to our website for the upcoming update of our 
                visualizing tools!
              </Typography>
              <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                // size="large" 
                color="primary"
                variant="contained"
                onClick={handleSubmit}
              >
              Keep me updated
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Hidden smDown>
            <div/>
            <img
              src="https://images.unsplash.com/photo-1615230931067-b14379680061?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1568&q=80"
              alt="call to action"
              style={{
                height: "100%",
                width: "100%"
              }}
            />
          </Hidden>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="We will send you news of our newly designed visualizing tools."
      />
    </Container>
  );
}

export default EmailService;
