import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from '@material-ui/core/Container';
import NoteCard from '../components/NoteCard';

import Masonry from 'react-masonry-css';

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

    const breakpoints = {
        default: 3,         // for default on large screen 3 cols
        1100: 2,            // for default on midium screen 2 cols
        700: 1              // for default on small screen 1 col
    }

    return (

        <Container>

            {/* The following comments is replaced by the react-masonry-css 
                */}
            {/* <Grid container spacing={3}>
                {notes.map((elem) =>
                    <Grid item key={elem._id} xs={12} sm={6} md={3}>

                            <NoteCard note = {elem} handleDelete = {userDelete} />

                    </Grid>
                )}
            </Grid> */}

            <Masonry
                breakpointCols={breakpoints}                /* this will automatically change the layout according to screen pixel */
                className="my-masonry-grid"                 /* this style is included globally in index.css */
                columnClassName="my-masonry-grid_column"   /* this style is included globally in index.css */
            >
                {notes.map(elem => (
                    <div item key={elem._id} >

                        <NoteCard note={elem} handleDelete={userDelete} />

                    </div>
                ))}
            </Masonry >

        </Container>

    )
}
