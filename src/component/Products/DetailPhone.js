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
        name: "Phone1",
        Price: "1000$",
        image: require("../../images/phone1.PNG"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    },
    {
        id: 2,
        name: "Phon2",
        Price: "1000$",
        image: require("../../images/phone2.PNG"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 3,
        name: "Phone3",
        Price: "1000$",
        image: require("../../images/phone3.PNG"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 4,
        name: "Phone4",
        Price: "1000$",
        image: require("../../images/phone4.PNG"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 5,
        name: "Phone5",
        Price: "1000$",
        image: require("../../images/phone5.PNG"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 6,
        name: "Phone6",
        Price: "1000$",
        image: require("../../images/phone6.PNG"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 7,
        name: "Phone7",
        Price: "1000$",
        image: require("../../images/phone7.PNG"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    },
    {
        id: 8,
        name: "Phone8",
        Price: "1000$",
        image: require("../../images/phone8.PNG"),
        description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."

    }
];
export default function DetailPhone() {
    const classes = useStyles();
    const {itemDetail1} = useParams();
    console.log('itemddds',itemDetail1);
    let result1 = datas.filter(item => item.id == itemDetail1)
    console.log('result',result1);
    return (
        <div><Header />
           {
               !!result1 && 
                <Container>
                    <Grid container spacing={4} className={classes.mainGrid} >
                        <Grid item xs={12} md={6} >
                            <Card>
                                <CardContent>
                                    <CardContent>
                                        <img src={result1[0].image} className={classes.mainImage} />
                                    </CardContent>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <CardContent>
                                <Box className={classes.mainHead}>
                                    <Typography variant='h5'>{result1[0].name}</Typography>
                                    <Typography>{result1[0].Price}</Typography>
                                </Box>
                                <CardContent>
                                    <Typography>{result1[0].description}</Typography>
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