import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 475,
        backgroundColor: 'rgb(119,59,59, 0.3)'
    },
    title: {
        fontSize: 30,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent style={{ textAlign: 'center' }}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Hi, I'm Brett!
                </Typography>
                <Typography variant="body1" component="p">
                    Computer Scientist, Athlete, Innovator.
                </Typography>
            </CardContent>
        </Card>
    );
}