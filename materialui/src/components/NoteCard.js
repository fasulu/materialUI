import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

import { DeleteOutlined } from '@material-ui/icons';

//learn more on makestyle https://www.youtube.com/watch?v=6BkqRkw0Lwc&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=15

const useStyles = makeStyles({
  countryBorder: {
    border: (note) => {
      if (note.countries == 'france') {
        return '1px solid red'
      } else if (note.countries == 'usa') {
        return '1px solid blue'
      } else if (note.countries == 'england') {
        return '1px solid green'
      } else if (note.countries == 'russia') {
        return '1px solid yellow'
      }
    }
  }
})

export default function NoteCard({ note, handleDelete }) {

  const styles = useStyles(note)

  return (

    <div>

      <Card elevation={1} className={styles.countryBorder}>

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