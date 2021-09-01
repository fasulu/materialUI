import { Button, makeStyles, Card, CardActions, CardContent, Typography, CardHeader, Avatar, IconButton } from '@material-ui/core'
import ShareIcon from '@material-ui/icons/Share'
import React from 'react'

// import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title:{
        fontSize:14
    },
    pos:{
        marginBottom:12
    }
});

const CoffeeCard = () => {

    const classes = useStyles()
    const bull = <span className={classes.bullet}>*</span>;

    return (

        <Card >
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
            }
            action = {
              <IconButton aria-label="settings">
                <ShareIcon />
              </IconButton>
            }
          />
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    word of the day
                </Typography>

                <Typography variant="h5" component="h2">
                    be{bull} new{bull} o{bull} lent
                </Typography>

                <Typography
                    className={classes.pos}
                    color="textSecondary">
                    adjective
                </Typography>

                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br/>
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>

            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>

        </Card>
    )
}

export default CoffeeCard;