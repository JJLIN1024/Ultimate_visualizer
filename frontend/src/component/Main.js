import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ShowCase from "./Main/ShowCase";
import SortingIntro from "./Main/SortingIntro";
import DataStructureIntro from "./Main/DataStructureIntro";
import EmailService from "./Main/EmailService";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(1),
            width: theme.spacing(275),
            height: theme.spacing(60),
        },
    },
    child: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(1),
            width: theme.spacing(275),
            height: theme.spacing(40),
        },
    },
}));

export default function Main() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid
                justify="space-around"
                container
                spacing={12}
                lg="auto"
                style={{
                    padding: "1rem",
                }}>
                <Grid
                    item
                    style={{
                        margin: "1rem",
                    }}>
                    <ShowCase />
                </Grid>
                <Grid item>
                    <SortingIntro />
                </Grid>
                <Grid item>
                    <DataStructureIntro />
                </Grid>
                <Grid
                    item
                    style={{
                        margin: "1rem",
                    }}>
                    <EmailService />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
