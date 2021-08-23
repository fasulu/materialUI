import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

import { DeleteOutlined } from '@material-ui/icons';
import { red, blue, green, pink } from '@material-ui/core/colors';

import Avatar from '@material-ui/core/Avatar';

// learn more on using avatar by picking first character of a particular field
// https://www.youtube.com/watch?v=gEbSx5CCgSc&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=17

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
  },
  avatarColor: {
    backgroundColor: (note) => {
      if (note.countries == 'france') {
        return red[500]
      } else if (note.countries == 'usa') {
        return blue[500]
      } else if (note.countries == 'england') {
        return green[500]
      } else if (note.countries == 'russia') {
        return pink[500]
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

          avatar={
            <Avatar className={styles.avatarColor}>
            {note.countries[0].toUpperCase()}
            {/* {console.log(note.countries[0].toUpperCase())} */}
            </Avatar>
          }

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