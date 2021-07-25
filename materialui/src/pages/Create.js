import React from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function Create() {
    return (

        // Learn typography from https://material-ui.com/components/typography/#typographyhttps://material-ui.com/components/typography/#typography and https://material-ui.com/api/typography/
        // Learn Button more from https://material-ui.com/components/buttons/#button

        <Container maxWidth='md'>
            <Typography
                variant='h1'
                color='primay'
                align='center'
                gutterBottom        // creates bottom margin

            >
                Create Page
            </Typography>

            <Typography
                variant='h6'
                color='textSecondary'
                component='h2'      // shows content in h6 overriding h2
                gutterBottom        // creates bottom margin
                align='left'
            >
                This is Create Page Text
            </Typography>


            <Button
                onClick={() => console.log("you clicked me")}
                type="submit"
                color="primary"
                variant="contained"
            >
                Submit
            </Button>


            <br />
            <AcUnitIcon color="primary" fontSize="large" />
            <AcUnitIcon color="primary" fontSize="small" />
            <AcUnitIcon color="primary" fontSize="large" />
            <br />


            <Button
                onClick={() => console.log("you clicked me")}
                type="submit"
                color="secondary"
                variant="contained"
                endIcon ={<KeyboardArrowRightIcon/>}        // using icons inside a button (endIcon will place icon in the rightside of button startIcon is leftside)
            >
                Submit
            </Button>

        </Container>
    )
}