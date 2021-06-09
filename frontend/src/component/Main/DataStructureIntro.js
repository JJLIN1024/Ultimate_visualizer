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

export default function DataStrutureIntro() {
    const classes = useStyles();

    return (
        <Router>
            <Card className={classes.root}>
                <CardActionArea disableRipple="true" disabled="true">
                    <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1519817914152-22d216bb9170?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Data Structure Visualization
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            Having trouble with Red Black Tree? We got you covered! Here we present you a great tool to
                            visualize the process of all kinds of operations, including insert, delete, extract,
                            rotation, and so on. Besides Red Black tree, here you also get access to Heap, BST, and all
                            sorts of basic Data Structure.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        size="large"
                        color="primary"
                        component={Link}
                        to={`/data-structure-visualization`}
                        target={`_blank`}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Router>
    );
}
