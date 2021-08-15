import axios from 'axios';

import { FormControlLabel, makeStyles } from '@material-ui/core'; // import useStyles hook
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



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
    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

export default function Create() {

    const styles = useStyles()          // create a style const asign useStyles hook to use custom styles

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [detailerr, setDetailErr] = useState(false)
    const [titleerr, setTitleErr] = useState(false)
    const [country, setCountry] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (title === '') {
            setTitleErr(true)
        } else { setTitleErr(false) }

        if (details === '') {
            setDetailErr(true)
        } else { setDetailErr(false) }

        if (title && details) {
            console.log(title, details, country)

            const userInfo = {
                firstname: title,
                language: details,
                countries: country
            }

            // TODOS add validation before sending to backend

            const response = await axios.post('http://localhost:9005/addinfo', userInfo)

            if (response.status === 200) {
                console.log("information added successfully", response.data.addInfo)
            } else {
                console.log("Something went wrong")
            }
        }
    }

    return (

        <Container maxWidth='md'>
            <Typography
                className={styles.title}        // add className as dynamic styles.title to get custom style of title
                variant='h3'
                color='primay'
                align='center'
                gutterBottom        // creates bottom margin
            >
                Create Page
            </Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField
                    className={styles.field}
                    onChange={(e) => setTitle(e.target.value)}
                    label='Name'
                    variant='outlined'
                    color='secondary'
                    required
                    fullWidth
                    error={titleerr}
                />

                <TextField
                    className={styles.field}
                    onChange={(e) => setDetails(e.target.value)}
                    label='Address'
                    variant='outlined'
                    color='secondary'
                    multiline
                    rows={4}
                    required
                    fullWidth
                    error={detailerr}
                />

                <FormControl className={styles.field}>
                    <FormLabel className={styles.title}>Country</FormLabel>
                    <RadioGroup value={country} onChange={(e) => setCountry(e.target.value)} >
                        <FormControlLabel value='france' control={<Radio />} label='France' />
                        <FormControlLabel value='england' control={<Radio />} label='England' />
                        <FormControlLabel value='usa' control={<Radio />} label='USA' />
                        <FormControlLabel value='russia' control={<Radio />} label='Russia' />
                    </RadioGroup>

                </FormControl>
                <Button
                    className={styles.btn}               // add className as dynamic styles.btn to get custom style of button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}        // using icons inside a button (endIcon will place icon in the rightside of button startIcon is leftside)
                >
                    Submit
                </Button>
            </form>

        </Container>

    )
}