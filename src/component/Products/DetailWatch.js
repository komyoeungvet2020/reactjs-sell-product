import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header';
import { Card, Typography, CardContent, CardHeader, Container, Grid, Button, Box } from '@material-ui/core';
import Footer from '../Footer';
import { useNavigate, useParams } from 'react-router-dom';



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
        name: "Watch1",
        Price: "1000$",
        image: require("../../images/image1.png"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
        id: 2,
        name: "Watch2",
        Price: "1000$",
        image: require("../../images/image2.PNG"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 3,
        name: "Watch3",
        Price: "1000$",
        image: require("../../images/image3.PNG"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 4,
        name: "Watch4",
        Price: "1000$",
        image: require("../../images/image4.PNG"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 5,
        name: "Watch5",
        Price: "1000$",
        image: require("../../images/image5.PNG"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 6,
        name: "Watch6",
        Price: "1000$",
        image: require("../../images/image6.PNG"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 7,
        name: "Watch7",
        Price: "1000$",
        image: require("../../images/image7.PNG"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 8,
        name: "Watch8",
        Price: "1000$",
        image: require("../../images/image8.PNG"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    }
];
export default function DetailWatch() {
    const classes = useStyles();
    const {itemDetail2} = useParams();
    console.log('itemddds',itemDetail2);
    let result2 = datas.filter(item => item.id == itemDetail2)
    return (
        <div><Header />
           {
               !!result2 && 
                <Container>
                    <Grid container spacing={4} className={classes.mainGrid} >
                        <Grid item xs={12} md={6} >
                            <Card>
                                <CardContent>
                                    <CardContent>
                                        <img src={result2[0].image} className={classes.mainImage} />
                                    </CardContent>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <CardContent>
                                <Box className={classes.mainHead}>
                                    <Typography variant='h5'>{result2[0].name}</Typography>
                                    <Typography>{result2[0].Price}</Typography>
                                </Box>
                                <CardContent>
                                    <Typography>{result2[0].description}</Typography>
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