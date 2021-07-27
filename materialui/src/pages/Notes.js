import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import NoteCard from '../components/NoteCard';

export default function Notes() {

    const [notes, setNotes] = useState([])


    useEffect(async () => {

        const response = await axios.get("http://localhost:9005/namelist")
        
        console.log(response.data.nameList)
        
        setNotes(response.data.nameList)
        
    }, [])
    
    const userDelete = async (id) => {
        console.log("user id to delete is ", id)

        await axios.delete("http://localhost:9005/userId/" + id)

        const newNotes = notes.filter(note => note._id !== id)

        setNotes(newNotes)

    }


    return (

        <Container>

            <Grid container spacing={3}>
                {notes.map((elem) =>
                    <Grid item key={elem._id} xs={12} sm={6} md={3}>

                            <NoteCard note = {elem} handleDelete = {userDelete} />

                    </Grid>
                )}
            </Grid>
        </Container>

    )
}
