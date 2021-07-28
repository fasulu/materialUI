import React from 'react';
import { makeStyles } from '@material-ui/core';     // import makeStyles
import Drawer from '@material-ui/core/Drawer';      // import Drawer
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240

const useStyles = makeStyles({                      // create and declare styles
    pages: {
        background: '#d5d5d5',
        width: '100%'
    },
    drawer: {
        width: drawerWidth
    },
    root: {
        display:'flex'
    },
    drawerPaper: {
        width: drawerWidth,
        background:'#f9f9f9'
    }
})

export default function Layout({ children }) {      // pass the children under Layout tag in app.js to here 

    const styles = useStyles()                      // assign useStyles to styles to use elsewhere

    return (

        <div className={styles.root}>

            <Drawer                                 //* create drawer to show permanently in left and over-ride materialUI paper classes by our own drawerPaper styles
                className={styles.drawer}
                variant='permanent'
                anchor='left'
                classes={{paper: styles.drawerPaper}}>  

                <div>
                    <Typography variant='h5' >
                        Address
                    </Typography>
                </div>
            </Drawer>

            <div className={styles.pages}>          {/* use those styles in return*/}

                {children}

            </div>
        </div>
    )
}