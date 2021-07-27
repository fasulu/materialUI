import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

export default function Notes() {

    const [notes, setNotes] = useState([])


    useEffect(async () => {

        const response = await axios.get("http://localhost:9005/namelist")
        
        console.log(response.data.nameList)
        
        setNotes(response.data.nameList)
        
    }, [])
    
    return (
        
        // <>
        //     <ul>         // Without materialUI styling
        
        //         {notes.map((elem) =>
        //             <li key={elem._id}> {elem.firstname} {elem.language} </li>
        //         )}
        
        //     </ul>
        // </>

        // <Container>      // How the Grid, Container and Paper works, example

        //     <Grid container>
        //         <Grid item xs={12} sm={6} md={3} lg={1} >
        //             <Paper>1</Paper>
        //         </Grid>
        //         <Grid item xs={12} sm={6} md={3} lg={1} >
        //             <Paper>2</Paper>
        //         </Grid>
        //         <Grid item xs={12} sm={6} md={3} lg={1} >
        //             <Paper>3</Paper>
        //         </Grid>
        //         <Grid item xs={12} sm={6} md={3} lg={1} >
        //             <Paper>4</Paper>
        //         </Grid>
        //     </Grid>

        //     </Container>

        <Container>

            <Grid container>
                {notes.map((elem) =>
                    <Grid item key={elem._id} xs={12} sm={6} md={3}>
                        <Paper>
                            <p>Name: {elem.firstname}</p>
                            <p>Language: {elem.language} </p>
                            <p>Country: {elem.countries}</p>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}
