import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

import { DeleteOutlined } from '@material-ui/icons';

export default function NoteCard({ note, handleDelete }) {
  return (

    <div>

      <Card elevation={1}>

        <CardHeader

          action={
            <IconButton

              onClick={() => handleDelete(note._id)}>

              <DeleteOutlined />

            </IconButton>
          }

          title={note.firstname}
          subheader={note.countries}

        />
        <CardContent>

          <Typography variant='body2' color='textSecondary'>

            {note.language}

          </Typography>

        </CardContent>
      </Card>


    </div>

  )
}