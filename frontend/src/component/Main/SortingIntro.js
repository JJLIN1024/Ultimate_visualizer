import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: 600,
    },
    media: {
        height: 200,
    },
});

export default function SortingIntro() {
    const classes = useStyles();

    return (
        <Router>
            <Card className={classes.root}>
                <CardActionArea disableRipple="true" disabled="true">
                    <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1603880920696-faf1d9ccc6a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                        title="Contemplative Reptilse"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Sorting Visualization
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            Sorting is one of the fundamental of Algorithms, but is hard to grasp the concept with
                            actually seeing the process of sorting, here, we provide a tool for you, demonstrate the
                            detail of all kinds of sort, from basic selection sort, to advance bogo sort.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        size="large"
                        color="primary"
                        component={Link}
                        to={`/sorting-visualization`}
                        target={`_blank`}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Router>
    );
}
