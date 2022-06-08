import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header';
import { Card, Typography, CardContent, Container, Grid, Button, Box } from '@material-ui/core';
import Footer from '../Footer';
import {useParams } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    gridItem: {
    },
    mainGrid: {
        marginTop: '15px'
    },
    mainImage: {
        width: '90%',
        height: '170px'
    },
    button: {
        background: 'blue',
        color: 'white'
    },
    detailButton: {
        display: 'flex',
        justifyContent: 'end'
    },
}));

const datas = [
    {
        id: 1,
        name: "Rolex1",
        Price: "1000$",
        image: require("../../images/dell.png"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
        id: 2,
        name: "Rolex2",
        Price: "1000$",
        image: require("../../images/dell1.png"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 3,
        name: "Rolex3",
        Price: "1000$",
        image: require("../../images/dell2.png"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 4,
        name: "Rolex4",
        Price: "1000$",
        image: require("../../images/dell3.png"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 5,
        name: "Rolex5",
        Price: "1000$",
        image: require("../../images/lennovo.png"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 6,
        name: "Rolex6",
        Price: "1000$",
        image: require("../../images/lennovo1.png"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 7,
        name: "Rolex7",
        Price: "1000$",
        image: require("../../images/lennovo2.png"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 8,
        name: "Rolex8",
        Price: "1000$",
        image: require("../../images/lennovo2.png"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
];
export default function DetailComputer() {
    const classes = useStyles();
    const {itemDetail} = useParams();
    console.log('itemddds',itemDetail);
    let result = datas.filter(item => item.id == itemDetail)
    console.log('result',result);
    return (
        <div><Header />
           {
               !!result && 
                <Container>
                    <Grid container spacing={4} className={classes.mainGrid} >
                        <Grid item xs={12} md={6} >
                            <Card>
                                <CardContent>
                                    <CardContent>
                                        <img src={result[0].image} className={classes.mainImage} />
                                    </CardContent>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <CardContent>
                                <Box className={classes.mainHead}>
                                    <Typography variant='h5'>{result[0].name}</Typography>
                                    <Typography>{result[0].Price}</Typography>
                                </Box>
                                <CardContent>
                                    <Typography>{result[0].description}</Typography>
                                </CardContent>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Container>
          }
                <Footer/>

        </div>
    );
}