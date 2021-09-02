import {
    Button, makeStyles, Card, CardActions, CardContent,
    Typography, CardHeader, Avatar, IconButton, CardMedia
} from '@material-ui/core';

import ShareIcon from '@material-ui/icons/Share';

import React from 'react';

// import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    sizeAvatar: {
        height: "28px",
        width: "28px"

    },
    imgSize: {
        height: "100px",
        width:"175px"
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
});

const TvCard = props => {

    const classes = useStyles()
    const bull = <span className={classes.bullet}>*</span>;
    const { avatarSrc, title, subtitle, description, imgSrc } = props;

    return (

        <Card >
            <CardHeader
                avatar={
                    // <Avatar aria-label="recipe" >TV</Avatar>
                    <Avatar src={avatarSrc} className={classes.sizeAvatar} />
                }
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                }
                // title="Samsung QLED"
                // subheader="$1,999.00"
                title={title}
                subheader={subtitle}
            />
            <CardMedia
                image={imgSrc} className={classes.imgSize}
                // style={{ height: "100px", width: "175px" }}
            />
            <CardContent>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Learn More</Button>
                <Button size="small">Offer</Button>
            </CardActions>

        </Card>
    )
}

export default TvCard;