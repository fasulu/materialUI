import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Notes() {

    const [notes, setNotes] = useState([])


    useEffect(async () => {

        const response = await axios.get("http://localhost:9005/namelist")

        console.log(response.data.nameList)

        setNotes(response.data.nameList)

    }, [])

    return (

        <div>

            <ul>

                {notes.map((elem) =>
                    <li key={elem._id}> {elem.firstname} {elem.language} </li>
                )}

            </ul>

        </div>
    )
}