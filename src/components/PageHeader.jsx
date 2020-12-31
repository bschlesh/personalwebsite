import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        color: 'white',
    },
    appBarTransparent: {
        backgroundColor: 'rgb(119,59,59, 0.3)'
    },
    appBarSolid: {
        backgroundColor: 'rgb(119,59,59)'
    }
}));

export default function PageHeader() {
    const classes = useStyles();

    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 310
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes[navRef.current]}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Brett Schlesinger
                    </Typography>
                    <Button style={{ color: 'white' }}>About Me</Button>
                    <Button style={{ color: 'white' }}>Work Experience</Button>
                    <Button style={{ color: 'white' }}>Skills</Button>
                    <Button style={{ color: 'white' }}>Contact Me</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}