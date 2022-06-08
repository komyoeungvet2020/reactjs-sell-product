import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../component/Header';
import { Card, Typography, CardContent, CardHeader, Container, Grid, Button, Box } from '@material-ui/core';
import Footer from '../Footer';


const useStyles = makeStyles(theme => ({
    gridItem: {
    },
    mainGrid: {
        marginTop: '15px'
    },
    mainImage: {
        width: '100%',
        height: '140px'
    },
    button: {
        background: 'blue',
        color: 'white'
    },
    detailButton: {
        display: 'flex',
        justifyContent: 'end'
    },
    mainHead: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));
export default function About() {
    const classes = useStyles();

    return (
        <div><Header />
            <Box>Hello World</Box>
            <Footer />

        </div>
    );
}