import { makeStyles } from '@material-ui/core'; // import useStyles hook
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import React from 'react';


const useStyles = makeStyles({                      // create const useStyles by makeStyles hook function
    btn: {                                          // create styles for button, title etc 
        fontSize: 15,
        backgroundColor: 'green',
        '&:hover': {
            backgroundColor: 'blue'
        }
    },
    title: {
        textDecoration: 'underline',
        marginBottom: 10
    }
})

export default function Create() {

    const styles = useStyles()          // create a style const asign useStyles hook to use custom styles

    return (

        // Learn typography from https://material-ui.com/components/typography/#typographyhttps://material-ui.com/components/typography/#typography and https://material-ui.com/api/typography/
        // Learn Button more from https://material-ui.com/components/buttons/#button

            <Container maxWidth='md'>
                <Typography
                    className={styles.title}        // add className as dynamic styles.title to get custom style of title
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
                    className={styles.btn}               // add className as dynamic styles.btn to get custom style of button
                    onClick={() => console.log("you clicked me")}
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}        // using icons inside a button (endIcon will place icon in the rightside of button startIcon is leftside)
                >
                    Submit
                </Button>

            </Container>

    )
}