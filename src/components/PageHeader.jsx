import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core";

const StyledButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #CE092A 30%, #8B8B8B 80%)',
        borderRadius: 30,
        border: 0,
        height: 48,
        margin: '5px',
        padding: '10px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        fontFamily: 'Bungee Outline',
        fontWeight: 'bold',
        fontSize: '1rem',
        color: 'white',
        resize: 'auto',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        color: 'white',
        fontFamily: 'Bungee Outline',
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    appBarTransparent: {
        backgroundColor: 'rgba(79,79,79,0.3)'
    },
    appBarSolid: {
        backgroundColor: 'rgb(79,79,79)'
    }
}));

export default function PageHeader() {
    const classes = useStyles();

    const [navBackground, setNavBackground] = useState('appBarSolid')
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 310
            if (show) {
                setNavBackground('appBarTransparent')
            } else {
                setNavBackground('appBarSolid')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            <div className={classes.root}>
                <AppBar position="fixed" className={classes[navRef.current]}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Brett Schlesinger
                        </Typography>
                        <StyledButton>About Me</StyledButton>
                        <StyledButton>Work Experience</StyledButton>
                        <StyledButton>Skills</StyledButton>
                        <StyledButton>Contact Me</StyledButton>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}