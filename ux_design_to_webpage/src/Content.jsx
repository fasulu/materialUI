import React from 'react';
import TvCard from './TvCard';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

// https://www.youtube.com/watch?v=tKzSnjWPtEw from 25 minutes

const Content = () => {
    return (

        <Grid container spacing={4} >
            <Grid item xs={false} sm={1} />
            <Grid item xs={10} sm={3}>
                <TvCard 
                title={"Samsung QLED"} 
                subtitle={"$1,999.99"} 
                avatarSrc={"https://image.darty.com/hifi_video/televiseurs-led/grand_ecran_led/samsung_qe55q83a_2021_s2103244942876A_135224065.jpg"} 
                imgSrc={"https://image.darty.com/hifi_video/televiseurs-led/grand_ecran_led/samsung_qe55q83a_2021_s2103244942876A_135224065.jpg"}
                description={"La technologie Quantum Dots capte la lumière et restitue une palette de couleurs d'un réalisme incomparable qui ne se dégrade pas au fil du temps."}
                />
            </Grid>
            {/* <Grid item xs= {10} sm={3}>
                <TvCard />
            </Grid>
            <Grid item xs= {10} sm={3}>
                <TvCard />
            </Grid> */}
            <Grid item xs={false} sm={1} />
        </Grid>
    )
}

export default Content;