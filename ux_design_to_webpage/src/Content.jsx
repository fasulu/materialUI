import React from 'react';
import CoffeeCard from './CoffeeCard';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

// https://www.youtube.com/watch?v=tKzSnjWPtEw from 25 minutes

const Content = () => {
    return (

        <Grid container spacing={4}>
            <Grid item xs={false} sm={2} />
            <Grid item xs= {10} sm={3}>
                <CoffeeCard />
            </Grid>
            <Grid item xs= {10} sm={3}>
                <CoffeeCard />
            </Grid>
            <Grid item xs= {10} sm={3}>
                <CoffeeCard />
            </Grid>
            <Grid item xs={false} sm={2} />
        </Grid>
    )
}

export default Content;