import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../component/Header';
import { Card, Typography, CardContent,Container, Grid, Button, Box } from '@material-ui/core';
import Footer from '../Footer';
import { useNavigate} from 'react-router-dom';
import { getApiDetail } from '../../services/ListApi';

const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: '15px',
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
export default function Computer() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [list, setList] = useState([]);
  useEffect(() => {
    let mounted = true;
    getApiDetail()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])
    const ondetail = (item) => {
        console.log('item',item);
        navigate(`/detailComputer/${item.id}`);

    };
    return (
        <div><Header />
            <Container>
                <Grid container spacing={1} className={classes.mainGrid} >
                    {list.map(item => (
                        <Grid item xs={12} sm={3}>
                            <Card>
                                <CardContent key={item.item}>
                                    <Box className={classes.mainHead}>
                                        <Typography variant='h5'>{item.computer.name}</Typography>
                                        <Button variant="contained" size="small" className={classes.button} onClick={() => ondetail(item)}>
                                            Detail
                                        </Button>
                                    </Box>
                                    <CardContent>
                                        <img src={item.computer.image} className={classes.mainImage} />
                                        <Typography variant="body2" color="text.secondary">
                                            {item.computer.description}
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </div>
    );
}