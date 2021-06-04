import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 50,
  },
  pos: {
    marginBottom: 12,
  },
});
const backgroundImage =
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80';

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} >
      <CardMedia
          component="img"
          alt="background image"
          height="140"
          image={backgroundImage}
          title="background image"
        />
      <CardContent>
        <img style={{ display: 'none' }} src={backgroundImage}/>
        <Typography color="inherit" align="center" variant="h2" marked="center">
          Visualize your thoughts
        </Typography>
        <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
          Sign up to unlock more fancy visualizing tools!
        </Typography>
      </CardContent>
      <CardMedia
          component="img"
          alt="background image"
          height="140"
          image={backgroundImage}
          title="background image"
        />
      <CardActions>
          <Button
          color="default"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
          href="/sign-up"
        >
          Register
        </Button>
      </CardActions>
    </Card>
  );
}
