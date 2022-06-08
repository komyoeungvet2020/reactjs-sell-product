import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    mainFooter: {
        padding:'30px',
        marginTop:'30px'
    },
    topFooter: {
        backgroundColor:'rgb(0, 51, 157)',
        color:'white',
        padding:'5px'
    },
    font:{
        fontSize:'14px'
    }
}));
export default function Footer() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" elevation={0} component="footer" className={classes.mainFooter}>
                <Grid container item justify="space-between">
                    <Grid item sm={12} xs={12} md={4}>
                        <h2>Contact Us</h2>
                        <Typography paragraph className={classes.font}>
                            <b>Address:</b> BP 511, Phum Tropeang Chhuk (Borey Sorla) Sangtak, Street 371, Phnom Penh<br></br>
                            <b>Phone:</b> +855 [0]987 654 321 <br></br>
                            <b>Email:</b> support@gmail.com <br></br>
                            <b> Working Days/Hours:</b> Mon - Fri / 8:00 AM - 5:00 PM <br></br>
                            <b>Working Days/Hours:</b> Sat / 8:00 AM - 12:00 PM <br></br>
                        </Typography>
                    </Grid>
                    <Grid item sm={12} xs={11} md={4}>
                        <h2>Quick Links</h2>
                        <Typography paragraph>
                        This site is compliant with the Payment Card Industry and Data Security Standard. Read more about Stripe security
                        </Typography>
                    </Grid>
                    <Grid item sm={12} xs={11} md={4}>
                        <h2>Our Facebook Page</h2>
                        <Typography paragraph>
                        This site is compliant with the Payment Card Industry and Data Security Standard. Read more about Stripe security
                        </Typography>
                    </Grid>
                </Grid>

                <Toolbar style={{ justifyContent: "center" }}>
                    <Typography variant="caption">©2022 React JS, All Rights Reserved & Designed by GIANTFOCUS</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}